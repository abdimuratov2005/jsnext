declare type AppOptions = {
  rendererEl: HTMLElement
}

declare interface AnimationProps {
  destination?: number;
  duration?: number;
  delay?: number;
  easing?: (amount: number) => number;
}

declare interface AssetsToPreloadProps {
  type?: string
}

declare interface BlurOptionsProps {
  value?: number | undefined;
  min?: number | undefined;
  max?: number | undefined;
  newMin?: number | undefined;
  newMax?: number | undefined;
}

declare interface Coordinates {
  x?: number;
  y?: number;
}
declare type EventTypes = "mousemove" | "touchmove" | "wheel" | "click"

declare interface Holder {
  el?: HTMLElement | null;
  rect?: {
    bottom?: number;
    height?: number;
    left?: number;
    right?: number;
    top?: number;
    width?: number;
    x?: number;
    y?: number;
  };
}

declare interface LoadingProgress {
  target?: {
    progress?: number | undefined;
  }
}

declare interface RaycasterProps {
  x?: number | undefined;
  y?: number | undefined;
  colliderName?: string;
  fnToCallIfHit?: number | string;
}

declare interface Sizes {
  width?: number;
  height?: number;
}

declare interface UpdateProps {
  time?: number;
  slowDownFactor?: number;
  delta?: number;
}