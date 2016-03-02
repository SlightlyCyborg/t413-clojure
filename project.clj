(defproject t-413 "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [quil "2.2.6"]
                 [me.raynes/fs "1.4.6"]
                 [clj-time "0.11.0"]
                 [org.clojure/data.json "0.2.6"]
                 [org.clojure/clojurescript "1.7.228"]
                 [clj-serial "2.0.4-SNAPSHOT"]
                 [commons-net/commons-net "3.3"]
                 [overtone/at-at "1.2.0"]]

  :profiles {:dev {:dependencies [[alembic "0.3.2"]]}})
