(ns water_wheel.spoof-gpio
  (:require [me.raynes.fs :as fs]))

(def logfile "./gpio-log")

(defn output-to-log [root dirs files]
     (doseq [file files]
        (spit logfile
              (str file ":" (slurp file) "\n")
              :append true)
       (spit file "");clear file
      ))

(defn listen-to-spoof-gpio-filesystem [file-system-location]
  (fs/walk output-to-log file-system-location)
  )


(listen-to-spoof-gpio-filesystem "./spoof-sys/")
*cwd*

