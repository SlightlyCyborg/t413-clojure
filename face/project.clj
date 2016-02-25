(defproject face "NOT_DEPLOYED"
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.7.0-RC1"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [ring "1.2.2"]
                 [compojure "1.1.8"]
                 [enlive "1.1.5"]
                 [me.raynes/fs "1.4.6"]
                 [jayq "2.5.4"]
                 [alembic "0.3.2"]]

  :profiles {:dev {:repl-options {:init-ns face.core
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :plugins [[lein-cljsbuild "1.0.3"]]
                   :cljsbuild {:builds [{:source-paths ["src/cljs"]
                                         :compiler {:output-to "resources/public/app.js"
                                                    :optimizations :simple
                                                    :pretty-print true}}]}
                   :dependencies [[alembic "0.3.2"]
                                  [org.clojure/tools.nrepl "0.2.10"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [weasel "0.7.0" :exclusions [org.clojure/clojurescript]]
                                  ]}})

