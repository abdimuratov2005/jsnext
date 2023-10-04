import Scroll from './Scroll';
import CustomObject from './CustomObject';
import MouseMove from './MouseMove';
import Grid from './Grid';
import { Scene, Raycaster, PerspectiveCamera } from 'three';
import { UpdateProps } from '../shared/types/UpdateEvent.interface';
import { data, options } from '../options';
import { Sizes } from '../shared/types/Size.interface';
import { Coordinates } from '../shared/types/Coordinates.interface';
import { RaycasterProps } from '../shared/types/Raycaster.interface';
import { lerp } from '../shared/utils/lerp';
import { EventProps } from "../shared/types/EventProps.interface";

export default class CustomScene extends Scene {
  static shouldRaycastOnMouseMove: boolean;
  static lerpEase: number;
  _raycaster: Raycaster;
  _stageSize: Sizes;
  _scroll: any;
  _pixelRatio: number;
  _canHoverObject: boolean;
  _hoveredObject: Grid | null | never;
  _mouseMove: MouseMove;
  _onMouseMove: (event: EventProps) => void;
  _onClick: (event: EventProps) => void;
  _camera: PerspectiveCamera;
  mouse: { current: Coordinates; target: Coordinates; };
  mouseStrength: { current: number; target: number; };

  // @ts-ignore
  // =============================== Constructor -Start- ==============================\\
  constructor({ camera: perspCamera }) {
    super();
    this._raycaster = new Raycaster();
    this._stageSize = {
      height: 100,
      width: 100
    };
    // @ts-ignore
    this._mouseMove = MouseMove.getInstance();
    this._scroll = Scroll.getInstance();
    this._pixelRatio = 1;
    this._hoveredObject = null!;
    this._canHoverObject = true;
    this.mouse = {
      current: {
        x: 0,
        y: 0
      },
      target: {
        x: 0,
        y: 0
      }
    };
    this.mouseStrength = {
      current: 0,
      target: 0
    };
    this._onMouseMove = (e) => {
      this.mouseStrength.target = e.target!.strength;
      const mouseX = e.target!.mouse.x!;
      const mouseY = e.target!.mouse.y!;
      if (this.mouse.target.x = mouseX / this._stageSize.width! * 2 - 1,
        this.mouse.target.y = -(2 * (mouseY / this._stageSize.height!)) + 1,
        CustomScene.shouldRaycastOnMouseMove) {
        let raycast = this._performRaycast({
          x: this.mouse.target.x,
          y: this.mouse.target.y
        });
        if (raycast.length > 0 && this._canHoverObject) {
          let hoveredObj = raycast[0];
          hoveredObj === this._hoveredObject || (
            this._hoveredObject && this._hoveredObject.onMouseLeave(),
            data.isTouchDevice || (
              // @ts-ignore
              this._hoveredObject = hoveredObj,
              this._hoveredObject!.onMouseEnter()
            ))
        } else
          this._hoveredObject && (
            this._hoveredObject.onMouseLeave(),
            this._hoveredObject = null
          )
      }
    }

    this._onClick = (e) => {
      const mouseX = e.target?.mouse?.x!;
      const mouseY = e.target?.mouse?.y!;
      const normalizedX = mouseX / this._stageSize.width! * 2 - 1
      const normalizedY = -(2 * (mouseY / this._stageSize.height!)) + 1;

      this._performRaycast({
        x: normalizedX,
        y: normalizedY,
        colliderName: "sceneItem",
        fnToCallIfHit: "onClick"
      })
    }
    this._camera = perspCamera
  }

  // =============================== Constructor -End- ==============================\\

  _performRaycast(params: RaycasterProps) {
    const { x: raycastX, y: raycastY, colliderName: targetColliderName, fnToCallIfHit: hitCallbackFn } = params;
    // @ts-ignore
    this._raycaster.setFromCamera({ x: raycastX!, y: raycastY! }, this._camera);
    const intersectedObjects = this._raycaster.intersectObjects(this.children, true);
    const hitObjects: CustomObject[] = [];
    for (let i = 0; i < intersectedObjects.length; ++i) {
      const parentObject = intersectedObjects[i].object.parent as CustomObject;
      if (parentObject.colliderName) {
        hitObjects.push(parentObject);
        if (hitCallbackFn && parentObject.colliderName === targetColliderName) {
          // @ts-ignore
          parentObject[hitCallbackFn]();
        }
        break;
      }
    }
    return hitObjects;
  }

  _addListeners() {
    this._mouseMove.addEventListener("mousemove", this._onMouseMove.bind(this));
    this._mouseMove.addEventListener("click", this._onClick.bind(this));
  }

  _removeListeners() {
    this._mouseMove.removeEventListener("mousemove", this._onMouseMove.bind(this));
    this._mouseMove.removeEventListener("click", this._onClick.bind(this));
  }

  setStageSize(size: Sizes) {
    this._stageSize = size;
  }

  update(event: UpdateProps) {
    this._mouseMove.update();
    this._scroll.update(event);

    this.mouseStrength.current = lerp(this.mouseStrength.current, this.mouseStrength.target, CustomScene.lerpEase * event.slowDownFactor!);
    this.mouse.current.x = lerp(this.mouse.current.x!, this.mouse.target.x!, CustomScene.lerpEase * event.slowDownFactor!);
    this.mouse.current.y = lerp(this.mouse.current.y!, this.mouse.target.y!, CustomScene.lerpEase * event.slowDownFactor!);
  }

  setPixelRatio(pixelRation: number) {
    this._pixelRatio = pixelRation
  }

  destroy() {
    this._removeListeners()
  }
}
CustomScene.lerpEase = options.motion.LERP_EASE;
CustomScene.shouldRaycastOnMouseMove = true