(ns t-413.internal-map
  (:require [t-413.spoof-gpio :as spoof]
            [quil.core :as q]
            [quil.middleware :as m]))


(def context_w 5000)
(def context_h 5000)

(def robot_radius 35.5)


;Hypothesis Methods
(defn get-coors [hypothesis]
  {:x (hypothesis :x) :y (hypothesis :y)})

(defn get-angle [hypothesis]
  (hypothesis :angle))

(defn set-coors [hypothesis {x :x y :y}]
  (assoc hypothesis :x x :y y))

(defn set-angle [hypothesis {angle :angle}]
  (assoc hypothesis :angle angle))




