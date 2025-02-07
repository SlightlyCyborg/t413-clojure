(ns t-413.motor-funcs
  (:require [t-413.spoof-gpio :as spoof]
            [quil.core :as q]
            [quil.middleware :as m]
            [clodiuno.core :refer :all]
            [clodiuno.firmata :refer :all]))

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




(defn test-arduino-conn [tty]
    (let [board (arduino :firmata tty :baudrate 9600)]
        (pin-mode board 13 OUTPUT)
        (println "loop"))


(test-arduino-conn "/dev/tty.usbserial-DN00Q954")
