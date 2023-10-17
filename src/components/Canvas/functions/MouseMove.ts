import { EventDispatcher } from 'three';
import { Coordinates } from 'canvas/shared/types/Coordinates.interface';

export default class MouseMove extends EventDispatcher {
  static _canCreate: boolean;
  static _instance: MouseMove;
  _mouseLast: Coordinates;

  _isTouching: boolean;
  _clickStart: Coordinates;
  mouse: Coordinates;
  strength: number;
  _isInit: boolean;

  _onMouseDown: (event: MouseEvent & TouchEvent) => void;
  _onMouseMove: (event: MouseEvent & TouchEvent) => void;
  _onMouseUp: () => void;
  _onMouseLeave: () => void;
  _onClick: () => void;

  // =============================== Constructor -Start- ==============================\\
  constructor() {
    super();

    this._mouseLast = {
      x: 0,
      y: 0
    };
    this._isTouching = false;
    this._clickStart = {
      x: 0,
      y: 0
    };
    this.mouse = {
      x: 0,
      y: 0
    };
    this.strength = 0;
    this._isInit = false;

    this._onMouseDown = (event) => {
      const { clientX, clientY } = event;

      this._isInit = true;
      this._isTouching = true;
      this._mouseLast.x = "touches" in event ? event.touches[0].clientX : clientX;
      this._mouseLast.y = "touches" in event ? event.touches[0].clientY : clientY;
      this.mouse.x = this._mouseLast.x;
      this.mouse.y = this._mouseLast.y;
      this._clickStart.x = this.mouse.x;
      this._clickStart.y = this.mouse.y;
      // @ts-ignore
      this.dispatchEvent({
        type: "down"
      });
    };

    this._onMouseMove = (event) => {
      const { clientX, clientY } = event;
      this._isInit = true;

      const currentX = "touches" in event ? event.touches[0].clientX : clientX;
      const currentY = "touches" in event ? event.touches[0].clientY : clientY;
      const deltaX = currentX - this._mouseLast.x!;
      const deltaY = currentY - this._mouseLast.y!;

      this.strength = deltaX * deltaX + deltaY * deltaY;
      this._mouseLast.x = currentX;
      this._mouseLast.y = currentY;
      this.mouse.x! += deltaX;
      this.mouse.y! += deltaY;
    };

    this._onMouseUp = () => {
      this._isTouching = false;
      // @ts-ignore
      this.dispatchEvent({
        type: "up"
      });
    };

    this._onMouseLeave = () => {
      // @ts-ignore
      this.dispatchEvent({
        type: "left"
      });
    };

    this._onClick = () => {
      this._isInit = true;
      let deltaX = Math.abs(this._clickStart.x! - this.mouse.x!);
      let deltaY = Math.abs(this._clickStart.y! - this.mouse.y!);
      // @ts-ignore
      deltaX <= 10 && deltaY <= 10 && this.dispatchEvent({
        type: "click"
      })
    };

    this._addEventListeners();
    MouseMove._instance = this
  }

  // =============================== Constructor -End- ==============================\\

  static getInstance() {
    return MouseMove._instance || (MouseMove._canCreate = true,
      MouseMove._instance = new MouseMove,
      MouseMove._canCreate = false),
      MouseMove._instance
  }

  _addEventListeners() {
    // @ts-ignore
    window.addEventListener("mousedown", this._onMouseDown.bind(this))
    // @ts-ignore
    window.addEventListener("mousemove", this._onMouseMove.bind(this), {
      passive: true
    })
    window.addEventListener("mouseup", this._onMouseUp.bind(this))
    window.addEventListener("click", this._onClick.bind(this))
    // @ts-ignore
    window.addEventListener("touchstart", this._onMouseDown.bind(this))
    // @ts-ignore
    window.addEventListener("touchmove", this._onMouseMove.bind(this), {
      passive: true
    })
    window.addEventListener("touchend", this._onMouseUp.bind(this))
    window.addEventListener("mouseout", this._onMouseLeave.bind(this));
  }

  update() {
    // @ts-ignore
    this._isInit && this.dispatchEvent({
      type: "mousemove"
    });

    this._mouseLast.x = this.mouse.x;
    this._mouseLast.y = this.mouse.y;
  }
}