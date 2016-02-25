(ns face.control
  (:require [weasel.repl :as repl]
            [cljs.test :refer-macros [deftest is testing run-tests]]
            jayq.core))


(when-not (repl/alive?)
  (repl/connect "ws://localhost:9001"))


(def emotions [:happy :sad :exuberant :determined :normal])


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

(def transition-ended)

(defn make-super-gif-factory [loop autoplay]
  (fn [gif-keyword] 
  "Constructs a supergif using the correct parameters for this appliation"
    {gif-keyword
    (js/SuperGif #js {:gif (.getElementById js/document (name gif-keyword))
                      :loop_mode loop
                      :auto_play autoplay

                      :on_end
                      (if (= false loop)
                      transition-ended)})}))
  

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

(def gifs (get-and-load-gifs))

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


(defn reset-gif-test []
  (def cur-face (atom :happy))
  (def transition-queue (atom #queue []))
  (show-gif :happy)
  (hide-gif :normal-to-exuberant)
  (hide-gif :happy-to-normal)
  (make-transition-queue :happy :exuberant))


  
(defn make-transition-queue [from-face to-face]
  "This function will take a to-face and from-face and return a list of all the supergifs to be played for the transition"
  ;If the from-face is not "normal" then transitiion it to "normal"
  (if (not= from-face :normal)
    (swap! transition-queue conj (keyword (str (name from-face) "-to-normal"))))
  (swap! transition-queue conj (keyword (str "normal-to-" (name to-face)))))
  


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


(reset-gif-test)


;@cur-face

;@transition-queue

(make-transition)




