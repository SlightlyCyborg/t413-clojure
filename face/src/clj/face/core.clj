(ns face.core 
  (:require [net.cgrand.enlive-html :as enlive]
            [compojure.route :refer (resources)]
            [compojure.core :refer (GET defroutes)]  
            ring.adapter.jetty
            [clojure.java.io :as io]))                                 

(enlive/deftemplate page
  (io/resource "index.html")
  [])

(defroutes site
  (resources "/") 
  (GET "/*" req (page)))

(defn run
  []
  (defonce ^:private server
    (ring.adapter.jetty/run-jetty #'site {:port 8080 :join? false}))
  server)

