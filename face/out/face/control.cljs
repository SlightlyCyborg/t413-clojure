(ns face.control
  (:require
            [cljs.test :refer-macros [deftest is testing run-tests]]
            jayq.core
            clojure.string
            [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [taoensso.encore :as encore :refer ()]
            [weasel.repl :as repl]
            )
  (:require-macros [cljs.core.async.macros :as asyncm :refer (go go-loop)]))


(defn ->output! [fmt & args]
  (let [msg (apply encore/format fmt args)]
    (.log js/console msg)))


(defn connect-to-repl []
    (when-not (repl/alive?)
      (repl/connect "ws://localhost:9001")))

(connect-to-repl)

(def emotions [:happy :sad :exuberant :determined :normal :confused])


(defn emotion-names-to-transition-names [emotion-list]
  "Turns the vector of emotion names into a vector of the various transition gif names between those emotions"
  (filter (complement nil?)
          (flatten (map
            (fn [emotion]
              (if (not= :normal emotion)
                  [(keyword (str (name emotion) "-to-normal"))
                   (keyword (str "normal-to-" (name emotion)))]

                  nil))

        emotion-list))))

(emotion-names-to-transition-names [:happy :sad :normal])

(declare gifs)

(defn show-gif [gif-keyword]
  (-> (jayq.core/$ (.get_canvas (gifs gif-keyword)))
      (jayq.core/show)))

(defn hide-gif [gif-keyword]
  (-> (jayq.core/$ (.get_canvas (gifs gif-keyword)))
      (jayq.core/hide)))

(defn play-gif [gif-keyword]
  (.play (gifs gif-keyword)))

(def transition-queue (atom #queue [])) 
(def cur-face (atom :exuberant))


;Weird FEELS. Imperative Clojure. EWWWWWWWWWW!!!!!
(defn make-transition []
  (if (> (count @transition-queue) 0)
  (let [old-face @cur-face
        new-face (peek @transition-queue)]
   (println new-face)
   (swap! transition-queue pop)
   (println (swap! cur-face (fn [x y] y) new-face))
   (hide-gif old-face)
   (show-gif new-face)
   (play-gif new-face))))


  
(defn make-transition-queue [from-face to-face]
  "This function will take a to-face and from-face and return a list of all the supergifs to be played for the transition"
  ;If the from-face is not "normal" then transitiion it to "normal"
  (if (not= from-face :normal)
    (swap! transition-queue conj (keyword (str (name from-face) "-to-normal"))))
  (swap! transition-queue conj (keyword (str "normal-to-" (name to-face))))
  (swap! transition-queue conj to-face))
 



(defn make-super-gif-factory [loop autoplay]
  (fn [gif-keyword] 
  "Constructs a supergif using the correct parameters for this appliation"
    {gif-keyword
    (js/SuperGif #js {:gif (.getElementById js/document (name gif-keyword))
                      :loop_mode loop
                      :auto_play autoplay

                      :on_end
                      (if (= false loop)
                      make-transition)})}))
  

(defn make-transition-gifs []
  (let [transition-names (emotion-names-to-transition-names  emotions)]
    (apply merge
        (map (make-super-gif-factory false false) transition-names))))


(defn make-emotion-gifs []
  (apply merge
         (map (make-super-gif-factory true true) emotions)))

(defn load-gifs [gifs]
  (doseq [gif (vals gifs)]
    (.log js/console gif)
    (.load gif (fn [] (println "loaded gif")))
    (-> (jayq.core/$ (.get_canvas gif)) (jayq.core/hide))))
  
(defn get-and-load-gifs []
  (let [gifs (merge
                (make-emotion-gifs)
                (make-transition-gifs))]
        (load-gifs gifs)
  gifs))



;--------Module Test----------
(defn reset-gif-test []
  (def cur-face (atom :normal))
  (def transition-queue (atom #queue []))
  (show-gif :normal)
  (hide-gif :normal-to-exuberant)
  (make-transition-queue :normal :exuberant))

;(make-transition-queue :exuberant :happy)

;Call this to reset test
;(reset-gif-test)

;Then manually call this and watch face change
;(make-transition)

;Uncomment and execute to observe
;@cur-face
;@transition-queue


;Used for controlling an individual gif
;(play-gif :normal-to-exuberant)
;------------ END ------------
 
(defn change-emotion [emotion]
  "Will change the robots face to a given emotion. Requires emotion in keyword form"
  ;Test to make sure that emotion exists
  (if (not (contains? gifs emotion))
    (throw (js/Error (str (clojure.string/capitalize (name emotion)) " is not an emotion"))))
  (if (not (= emotion @cur-face)) ;This prevents moving out of cur-face to normal just to go back to cur-face
    (do
      (make-transition-queue @cur-face emotion)
      (make-transition))))

(change-emotion :exuberant)


(defn init-ws []
    (let [;; For this example, select a random protocol:
        rand-chsk-type (if (>= (rand) 0.5) :ajax :auto)
      _ (->output! "Randomly selected chsk type: %s" rand-chsk-type)

      ;; Serializtion format, must use same val for client + server:
      packer :edn ; Default packer, a good choice in most cases
      ;; (sente-transit/get-flexi-packer :edn) ; Experimental, needs Transit dep

      {:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket-client!
        "/chsk" ; Must match server Ring routing URL
        {:type   rand-chsk-type
         :packer packer})]

  (def chsk       chsk)
  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)   ; Watchable, read-only atom
  ))


;;;; Sente event handlers

(defmulti -event-msg-handler
  "Multimethod to handle Sente `event-msg`s"
  :id ; Dispatch on event-id
  )

(defn event-msg-handler
  "Wraps `-event-msg-handler` with logging, error catching, etc."
  [{:as ev-msg :keys [id ?data event]}]
  (-event-msg-handler ev-msg))

(defmethod -event-msg-handler
  :default ; Default/fallback case (no other matching handler)
  [{:as ev-msg :keys [event]}]
  (->output! "Unhandled event: %s" event))

(defmethod -event-msg-handler :chsk/state
  [{:as ev-msg :keys [?data]}]
  (if (= ?data {:first-open? true})
    (->output! "Channel socket successfully established!")
    (->output! "Channel socket state change: %s" ?data)))

(defmethod -event-msg-handler :chsk/recv
  [{:as ev-msg :keys [?data]}]
  (let [my-json (second ?data)]
    (->output!  (str my-json))
    (->output! "outputing json")
    (if (= (my-json :type) "emotion")
        (change-emotion (keyword (my-json :emotion)))))
  (->output! "Push event from server: %s" ?data)
  (->output! "Changed2"))


(defmethod -event-msg-handler :chsk/handshake
  [{:as ev-msg :keys [?data]}]
  (let [[?uid ?csrf-token ?handshake-data] ?data]
    (->output! "Handshake: %s" ?data)))

(defonce router_ (atom nil))
(defn  stop-router! [] (when-let [stop-f @router_] (stop-f)))
(defn start-router! []
  (stop-router!)
  (reset! router_
    (sente/start-client-chsk-router!
      ch-chsk event-msg-handler)))

;init stuff

(defn start-ws! []
  (start-router!))

(defn init-face []
  (def gifs (get-and-load-gifs))
  (show-gif :exuberant)
  (init-ws)
  (start-ws!))


(set! (.-onload js/window) #(init-face))

