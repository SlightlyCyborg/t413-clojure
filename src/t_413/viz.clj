(ns t-413.viz
  (:require
    [quil.core :as q]
    [quil.middleware :as m]))

(defn draw-title []
  (q/fill 0 0 0)
  (q/text "Robot Visualizer"))

(defn draw-state [state]
  )

(defn update-state [state])

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :rgb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {})


(q/defsketch water_wheel
  :title "Non Linear Water Wheel"
  :size [1080 720]
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

