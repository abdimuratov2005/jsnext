import { Object3D } from "three";

export default class CustomObject extends Object3D {
  _isHovered: boolean;
  colliderName: string;

  constructor() {
    super();
    this.colliderName = null!;
    this._isHovered = false;
  }

  setColliderName(name: string) {
    this.colliderName = name
  }
  onMouseEnter() {
    this._isHovered = true,
      this.dispatchEvent({
        // @ts-ignore
        type: "mouseenter"
      })
  }
  onMouseLeave() {
    this._isHovered = false,
      this.dispatchEvent({
        // @ts-ignore
        type: "mouseleave"
      })
  }
  onClick() {
    this.dispatchEvent({
      // @ts-ignore
      type: "click"
    })
  }
  update(_e: any) { }
  destroy() { }
}