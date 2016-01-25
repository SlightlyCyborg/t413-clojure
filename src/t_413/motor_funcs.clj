(ns water_wheel.motor-funcs
  (:require [quil.core :as q]
            [quil.middleware :as m]))

(def wheel-angles [0 120 240])

(defn linearize-motors [lin-input]
  ;will need to get this to calculate float
  ;that will be used in PWM. PWM->motor might
  ;not be linear
  lin-input)

(defn heading-to-thing [heading-deg]
  (map
    #(q/cos 
       (q/radians (- heading-deg %1)))
    wheel-angles))

(defn calculate-combined-force [wheel-percentages]
  ;x axis is lying on the 0 deg

  ;compute x components
  (map
    #(* %1 
        (q/cos
          %1)) 
    wheel-percentages))
