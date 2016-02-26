(ns face.control
  (:require
            [cljs.test :refer-macros [deftest is testing run-tests]]
            jayq.core
            clojure.string
            [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.timbre :as timbre :refer-macros (tracef debugf infof warnf errorf)]
            [taoensso.sente  :as sente :refer (cb-success?)]
            [weasel.repl :as repl]
            )
  (:require-macros [cljs.core.async.macros :as asyncm :refer (go go-loop)]))


(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))


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
(def cur-face (atom :happy))


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


(change-emotion :confused)

(defn init-face []
  (def gifs (get-and-load-gifs))
  (show-gif :exuberant))

(set! (.-onload js/window) #(init-face))

;(defn init-socket []
;  (let [{:keys [chsk ch-recv send-fn state]}
;      (sente/make-channel-socket! "/chsk" ; Note the same path as before
;       {:type :auto ; e/o #{:auto :ajax :ws}
;       })]
;  (def chsk       chsk)
;  (def ch-chsk    ch-recv) ; ChannelSocket's receive channel
;  (def chsk-send! send-fn) ; ChannelSocket's send API fn
;  (def chsk-state state)   ; Watchable, read-only atom
;  ))

;Normal breaks


