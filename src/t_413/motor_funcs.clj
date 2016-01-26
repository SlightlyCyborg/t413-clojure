(ns water_wheel.motor-funcs
  (:require [quil.core :as q]
            [quil.middleware :as m]))

(def wheel-angles [0 120 240])

(def gpio "./spoof-sys/gpio")

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

(defn send-power-to-motor [lin-input]
  )

;this function will set the motor pins to outputs
;returns the data-structure for other api funcs
(defn initialize-motors [motor-pins]
  (doseq [speed-pin  (:speed motor-pins)] ;export the gpio
    (spit (str gpio "/export") speed-pin :append true))
  true)

(defn monitor-spoof-sys [file-name]
   (slurp file-name))

(defn boot-robot []
    (initialize-motors {
       :speed
       [ 141 142 143 ]   ;pwm
       :direction
       [ 105 149 140 ]}) ;non-pwm
)


(boot-robot)


(monitor-spoof-sys (str gpio "/export"))



