import MouseMove from "canvas/functions/MouseMove";

export interface EventProps {
  type?: EventTypes;
  target?: MouseMove
  x?: number;
  y?: number;

}

type EventTypes = "mousemove" | "touchmove" | "wheel" | "click"