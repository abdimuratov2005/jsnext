import normalizeWheel from "normalize-wheel";
import { EventDispatcher } from "three";
import { options } from "../options";
import { EventProps } from "../shared/types/EventProps.interface";
import { UpdateProps } from "../shared/types/UpdateEvent.interface";
import { Coordinates } from "../shared/types/Coordinates.interface";

export default class Scroll extends EventDispatcher {
  static _instance: boolean | Scroll;
  static _canCreate: boolean;
  _useMomentum: Coordinates | boolean;
  _touchMomentum: Coordinates;
  _lastTouch: Coordinates;
  _isTouching: boolean;
  _onWheel: (event: WheelEvent) => void;
  _onResize: () => void;
  _onTouchUp: () => void;
  _onTouchMove: (event: MouseEvent & TouchEvent) => void;
  _onTouchDown: (event: MouseEvent & TouchEvent) => void;

  // =============================== Constructor -Start- ==============================\\
  constructor() {
    super();

    this._lastTouch = {
      x: 0,
      y: 0
    };

    this._useMomentum = false;

    this._touchMomentum = {
      x: 0,
      y: 0
    };

    this._isTouching = false;

    this._onTouchDown = (event) => {
      const { touches } = event as TouchEvent;
      const { clientX, clientY } = event as MouseEvent;

      this._isTouching = true;
      // @ts-ignore
      this.dispatchEvent({
        type: "touchdown"
      });
      this._useMomentum = false;
      this._lastTouch.x = "touches" in event ? touches[0].clientX : clientX;
      this._lastTouch.y = "touches" in event ? touches[0].clientY : clientY;
    };

    this._onTouchMove = (event) => {
      const { touches } = event as TouchEvent;
      const { clientX, clientY } = event as MouseEvent;
      if (!this._isTouching) return;
      const currentX = "touches" in event ? touches[0].clientX : clientX;
      const currentY = "touches" in event ? touches[0].clientY : clientY;
      const deltaX = currentX - this._lastTouch.x!;
      const deltaY = currentY - this._lastTouch.y!;

      this._lastTouch.x = currentX;
      this._lastTouch.y = currentY;

      this._touchMomentum.x! *= options.motion.MOMENTUM_CARRY;
      this._touchMomentum.y! *= options.motion.MOMENTUM_CARRY;
      this._touchMomentum.y! += deltaY;
      this._touchMomentum.x! += deltaX;

      this._applyScrollXY({
        x: deltaX,
        y: deltaY,
        type: "touches" in event ? "touchmove" : "mousemove"
      });
    };

    this._onTouchUp = () => {
      this._isTouching = false;
      // @ts-ignore
      this.dispatchEvent({
        type: "touchup"
      });
      this._useMomentum = true;
    };

    this._onWheel = (event: WheelEvent) => {
      this._useMomentum = false;
      let { pixelY: normalayzedY } = normalizeWheel(event);

      this._applyScrollXY({
        x: 0,
        y: -normalayzedY,
        type: "wheel"
      });
    };

    this._onResize = () => {
      this._useMomentum = false;
    };

    this._addEvents();
    Scroll._instance = this;
  }
  // =============================== Constructor -End- ==============================\\

  static getInstance() {
    return Scroll._instance || (Scroll._canCreate = true,
      Scroll._instance = new Scroll,
      Scroll._canCreate = false),
      Scroll._instance
  }

  _applyScrollXY(event: EventProps) {
    const { x: scrollX, y: scrollY, type: eventType } = event;
    switch (eventType) {
      case "mousemove":
        // @ts-ignore
        this.dispatchEvent({
          type: "mouse",
          x: scrollX,
          y: scrollY
        });
        break;
      case "touchmove":
        // @ts-ignore
        this.dispatchEvent({
          type: "touch",
          x: scrollX,
          y: scrollY
        });
        break;
      case "wheel":
        // @ts-ignore
        this.dispatchEvent({
          type: "wheel",
          x: scrollX,
          y: scrollY
        });
        break;
    }
  }

  _addEvents() {
    window.addEventListener("wheel", this._onWheel);
    // @ts-ignore
    window.addEventListener("mousedown", this._onTouchDown);
    // @ts-ignore
    window.addEventListener("mousemove", this._onTouchMove);
    window.addEventListener("mouseup", this._onTouchUp);
    // @ts-ignore
    window.addEventListener("touchstart", this._onTouchDown);
    // @ts-ignore
    window.addEventListener("touchmove", this._onTouchMove);
    window.addEventListener("touchend", this._onTouchUp);
    window.addEventListener("resize", this._onResize);
    this._onResize()
  }

  update(event: UpdateProps) {
    if (!this._useMomentum) return;
    const timeInSeconds = event.time! / 1000;
    const clampedTime = Math.min(Math.max(timeInSeconds, 1), 4);
    this._touchMomentum.x! *= Math.pow(options.motion.MOMENTUM_DAMPING, clampedTime);
    this._touchMomentum.y! *= Math.pow(options.motion.MOMENTUM_DAMPING, clampedTime);
    const xMomentumGreaterThreshold = Math.abs(this._touchMomentum.x!) >= 0.01;
    const yMomentumGreaterThreshold = Math.abs(this._touchMomentum.y!) >= 0.01;
    if (xMomentumGreaterThreshold) {
      this._applyScrollXY({
        x: this._touchMomentum.x,
        y: 0,
        type: "touchmove"
      });
    }

    if (yMomentumGreaterThreshold) {
      this._applyScrollXY({
        x: 0,
        y: this._touchMomentum.y,
        type: "touchmove"
      });
    }
  }
}
Scroll._canCreate = false;