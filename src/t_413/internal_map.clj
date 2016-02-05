(ns t-413.internal-map
  (:require [t-413.spoof-gpio :as spoof]
            [quil.core :as q]
            [quil.middleware :as m]))

(def context_w 5000) ;in cm
(def context_h 5000) ;in cm

(def pxls 720)


(def robot_radius 35.5) ;28inches/2 -> cm


;Hypothesis Methods
(defn get-coors [hypothesis]
  {:x (hypothesis :x) :y (hypothesis :y)})


(defn get-angle [hypothesis]
  (hypothesis :angle))


(defn set-coors [hypothesis {x :x y :y}]
  (assoc hypothesis :x x :y y))


(defn set-angle [hypothesis {angle :angle}]
  (assoc hypothesis :angle angle))


(defn make-random-objs [number-objs]
  (map 
   (fn [arg] (let [h (* 0.25 (rand) context_h)
        w (* 0.255 (rand) context_w)]
      
  {:x (* (rand) (- context_w w))
   :y (* (rand) (- context_h h))
   :h h
   :w w}))
   (range number-objs)))

(defn draw-goal [goal]
  (q/stroke 255 100 100)
  (q/ellipse (goal :x) (goal :y) 10 10))


(defn setup []
  (q/frame-rate 30)
  (q/color-mode :rgb)
  (q/background 255 255 255)
  (q/stroke-weight 10)
  {:objects (make-random-objs 2)})

(defn real-coors-to-pixels [obj]
  (let [factor (/ pxls context_w)]
    (apply merge
     (map
     (fn [val]
       {(first val)
        (* (second val) factor)})
     obj))))
       
(real-coors-to-pixels {:a 1 :b 2})

(defn draw-state [state]
  (q/stroke 0 0 0)
  (doseq [obj (state :objects)]
     (let [n-obj (real-coors-to-pixels obj)]
       (println n-obj)
       (q/rect (n-obj :x) (n-obj :y) (n-obj :w) (n-obj :h))
       (draw-goal {:x 200 :y 200}))))


(defn update-state [state]
  state)


(q/defsketch water_wheel
  :title "Robot Simulator"
  :size [720 720]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  :features [:keep-on-top]
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])

