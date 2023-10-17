export interface AnimationProps {
  destination?: number;
  duration?: number;
  delay?: number;
  easing?: (amount: number) => number;
}