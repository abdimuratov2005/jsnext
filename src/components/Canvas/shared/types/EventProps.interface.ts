import MouseMove from "../../functions/MouseMove";

export interface EventProps {
  type?: EventTypes;
  target?: MouseMove
  x?: number;
  y?: number;
}