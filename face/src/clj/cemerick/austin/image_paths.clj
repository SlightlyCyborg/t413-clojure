(ns cemerick.austin.image-paths
  (:require [me.raynes.fs :as fs]))

(defn get-gifs []
    (fs/find-files "resources/public/roboteyes" #".+\.gif"))

(defn get-file-names [files]
  (map #(.getName %1) 
       files))

(print-file-names (get-gifs))






