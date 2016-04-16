(ns face.core 
  (:require [net.cgrand.enlive-html :as enlive]
            [compojure.route :refer (resources)]
            [compojure.core :refer (GET POST defroutes)]  
            [clojure.java.io :as io]
            [taoensso.sente :as sente]
            [taoensso.timbre]
            [taoensso.sente.server-adapters.http-kit :refer (sente-web-server-adapter)]
            weasel.repl.websocket)
  (:use org.httpkit.server
        ring.middleware.keyword-params
        ring.middleware.params
        ring.middleware.session
        [ring.util.response :refer (file-response)]))

(let [{:keys [ch-recv send-fn ajax-post-fn ajax-get-or-ws-handshake-fn
              connected-uids]}
      (sente/make-channel-socket! sente-web-server-adapter {})]
  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(def face-page 
   {:status 200
    :headers {}
    :body (io/file "resources/public/index.html")
    :session {:uid 1}})


(defn native-ws[request]
  (with-channel request channel
    (on-close channel (fn [status] (println "channel closed: " status)))
    (on-receive channel (fn [data] ;; echo it back
                          (send! channel data)))))


(defroutes site
  (resources "/") 
  (GET "/" req face-page)
  (GET  "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/chsk" req (ring-ajax-post                req))
  (GET  "/ws" req (native-ws req)))

(def face-app
  (-> site 
      ;; Add necessary Ring middleware:
      ring.middleware.keyword-params/wrap-keyword-params
      ring.middleware.params/wrap-params
      ring.middleware.session/wrap-session))

(def stop-server nil)

(defn run
  []
  (def stop-server ;http-kit/run-server returns a function to stop the server
    (run-server face-app {:port 8080})))

(defn stop []
  (if nil? stop-server
    (throw (Exception. "There is no active server to stop")))
  (stop-server)
  ;Server has been stopped there is no longer a server to stop so set to nil
  (def stop-server nil))


;(defn start-cljs-repl []
;  (cemerick.piggieback/cljs-repl
;        (weasel.repl.websocket/repl-env :ip "0.0.0.0" :port 9001)))



