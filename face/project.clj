(defproject face "NOT_DEPLOYED"
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.async "0.2.374"]
                 [ring "1.2.2"]
                 [ring/ring-defaults "0.1.5"]
                 [compojure "1.1.8"]
                 [enlive "1.1.5"]
                 [me.raynes/fs "1.4.6"]
                 [jayq "2.5.4"]
                 [alembic "0.3.2"]
                 [clj-time "0.11.0"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/clojurescript "1.7.228"]
                 [clj-serial "2.0.4-SNAPSHOT"]
                 [commons-net/commons-net "3.3"]
                 [overtone/at-at "1.2.0"]]


  :profiles {:dev {:repl-options {:init-ns face.core
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :plugins [[lein-cljsbuild "1.1.2"]
                             [lein-pprint         "1.1.2"]
                             [lein-ancient        "0.6.8"]
                             [com.cemerick/austin "0.1.6"]]
                   :cljsbuild {:builds [{:source-paths ["src/cljs"]
                                         :compiler {:output-to "resources/public/app.js"
                                                    :optimizations :simple
                                                    :pretty-print true}}]}
                   :dependencies [[alembic "0.3.2"]
                                  [org.clojure/tools.nrepl "0.2.12"]
                                  [com.cemerick/piggieback "0.2.1"]
                                  [weasel "0.7.0" :exclusions [org.clojure/clojurescript]]
                                  [com.taoensso/sente "1.8.0-beta1"]
                                  [com.taoensso/timbre       "4.2.1"]
                                  [com.taoensso/encore "2.36.2"]
                                  ]}})

