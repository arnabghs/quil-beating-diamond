(ns my.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def sum-of (partial mapv +))

(defn top-right-diag [x] (for [i (range 0 (inc x))] [i (- i x)]))

(defn top-left-diag [x] (for [i (range 0 (inc x))] [(- i) (- i x)]))

(defn bot-left-diag [x] (for [i (range x -1 -1)] [(- i x) i]))

(defn bot-right-diag [x] (for [i (range x -1 -1)] [(- x i) i]))
:sizes
(def all-diags (juxt top-left-diag top-right-diag bot-left-diag bot-right-diag))

(defn diags-from-center [center x]
  (mapv (partial sum-of center) (into #{} cat (all-diags x))))

(defn setup []
  (q/frame-rate 5)
  (q/color-mode :rgb)
  {:sizes [1]
   :tile-size 10
   :modifier 0
   :modifiers [inc dec]})


(defn update-state [state]
  (let [first-size (first (state :sizes))
        sec-mod (second (:modifiers state))
        first-mod (first (:modifiers state))]
    (if (or (zero? first-size) (>= first-size 25))
      (-> state
          (update :modifiers reverse)
          (update :sizes (partial map sec-mod)))
      (update state :sizes (partial map first-mod)))))



(defn draw-diamond [size tile-size]
  (let [coords (diags-from-center [(/ (q/width) tile-size 2)
                                   (/ (q/height) tile-size 2)] size)]
    (doseq [[x y] coords]
      (apply q/fill [0 0 0])
      (q/no-stroke)
      (q/rect (* y tile-size) (* x tile-size) tile-size tile-size))))

(defn draw-state [{:keys [sizes tile-size]}]
  (q/background 240)
  (doseq [size sizes]
    (draw-diamond size tile-size)))

(q/defsketch my
             :host "host"
             :size [500 500]
             :setup setup
             :update update-state
             :draw draw-state
             :middleware [m/fun-mode])

; uncomment this line to reset the sketch:
 (run-sketch)
