(ns t-413.serial
  (:require [overtone.at-at :as at-at]
            [serial.core :as s]
            [clojure.string :as string]))

(def my-pool (at-at/mk-pool))

(def stop-sockets (ref false))

(defn get-serial-line [istream]
  (let [comm-queue (atom (clojure.lang.PersistentQueue/EMPTY))]
    (while (>= (.available istream) 12)
      (println (map vec @comm-queue))
      ;Data is ready to handle
      (loop [b (char (.read istream)) rv ""]
        (if (or (= (str b) "\n") (= (.available istream) 0))
          (do (println (str "rv: " rv)) (swap! comm-queue conj rv))
          (recur (char (.read istream)) (str rv b)))))
    @comm-queue))

(defn parse-serial-line [line]
  (if (not= (count line) 14)
    false)
  {:type    (str (get line 1)  (get line 2))
   :id (str (get line 4)  (get line 5))
   :payload      (str (get line 7)  (get line 8))})

(defn fetch-and-parse-data [port]
    (map
     #(parse-serial-line (vec (string/trim %1)))
     (get-serial-line (.in-stream port))))

(defn data-dispatch [data-list dispatch-map]
  ;Currently, we will assume that no order should be taken into account
  ;Execute each new command's callback in a new thread
  (doseq [command data-list]
    (future ((get dispatch-map
                  (:type command)
                  
                  ;default is needed just in case the command is not in the dispatch-map
                  #())

                  ;pass in full command /w payload and id when you exec the map
                  command))))

(defn arduino-listen [port-name dispatch-map]
  (let [port (s/open port-name)]
    (try
        (let [dispatch-process (at-at/every 1000
          #(-> port (fetch-and-parse-data) (data-dispatch dispatch-map))
          my-pool)]
        ;Now just wait until the stop-sockets becomes true
        (while (not @stop-sockets))
        ;Clean up
        (at-at/stop dispatch-process))
        (s/close port)
       (catch Exception e (do
                            (s/close port)
                            (println (.getMessage e)))))))

(defn start-arduino-listener [port-name dispatch-map]
  (future (arduino-listen port-name dispatch-map)))

(defn stop-listeners []
    (dosync (ref-set stop-sockets true)))

(defn start-test []
  (let [dispatch-map {"00" #(println %1)}]
    (start-arduino-listener "/dev/tty.usbmodem1421" dispatch-map)))

(defn stop-test []
  (stop-listeners)
  (Thread/sleep 1000) ;Wait for all of the listeners to clean up
  (dosync (ref-set stop-sockets false)) ;Reset the flag for next test
  )





