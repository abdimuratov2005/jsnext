import CustomObject from "./CustomObject";
import { ShaderMaterial, FrontSide, Mesh, PlaneGeometry, Texture } from "three";
// @ts-ignore
import { Tween, Easing } from "@tweenjs/tween.js";
import {
  AvatarsProps,
  AvatarOptions,
  LoadedAssetsProps,
} from "../shared/types/Options.interface";
import { data, avatarOptions } from "../options";
// @ts-ignore
import vertexShader from "../shaders/plane/vertex.glsl";
// @ts-ignore
import fragmentShader from "../shaders/plane/fragment.glsl";
import { mix } from "../shared/utils/mix";
import { interpolate } from "../shared/utils/interpolate";

export default class Grid extends CustomObject {
  static disappearOffset: number;
  static ellipseX: number;
  avatarItem: AvatarsProps | undefined;
  _scaleGridTween: Tween<this>;
  _focusedElBounds: AvatarOptions;
  _gridElBounds: AvatarOptions;
  _loadedAsset: LoadedAssetsProps;
  _stageSize: Sizes;
  _extraScrollGrid: Coordinates;
  _defaultScale: Coordinates;
  _focusedNormalizedProgress: number;
  _scaleFactorGrid: number;
  _setFocusedIndex: (value: number | undefined) => void;
  _material: ShaderMaterial;
  _mesh: Mesh<PlaneGeometry, ShaderMaterial>;

  constructor({ name, setFocusedIndex }: any) {
    super();
    this._focusedElBounds = avatarOptions;
    this._gridElBounds = avatarOptions;
    this._loadedAsset = null!;
    this._stageSize = {
      width: 1,
      height: 1,
    };
    this._extraScrollGrid = {
      x: 0,
    };
    this._defaultScale = {
      x: 1,
      y: 1,
    };

    this._focusedNormalizedProgress = 0;
    this._scaleFactorGrid = 1;
    this._scaleGridTween = null!;
    this._setFocusedIndex = setFocusedIndex;
    this.avatarItem = data.avatarsArray!.find((avatar) => avatar.name === name);
    this._material = new ShaderMaterial({
      side: FrontSide,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true,
      wireframe: false,
      uniforms: {
        uTime: {
          value: 0,
        },
        tMap: {
          value: null!,
        },
        tMapBlur: {
          value: null!,
        },
        uIsBlurred: {
          value: 0,
        },
        uStageRes: {
          value: [0, 0],
        },
        uPlaneRes: {
          value: [1, 1],
        },
        uMediaRes: {
          value: [1, 1],
        },
      },
    });
    this._mesh = new Mesh(data.planeGeometry, this._material);
    this.add(this._mesh);
  }

  _animateScaleGrid(animate: AnimationProps) {
    const {
      destination,
      duration = 950,
      delay = 0,
      easing = Easing.Exponential.InOut,
    } = animate;
    if (this._scaleGridTween) {
      this._scaleGridTween.stop();
    }
    this._scaleGridTween = new Tween(this)
      .to({ _scaleFactorGrid: destination }, duration)
      .delay(delay)
      .easing(easing)
      .start();
  }

  updatePlaneSize() {
    const avatarItem = this.avatarItem;
    const assetSizeRatio = avatarItem?.assetSizeRatio || 1;

    const scaleFactor = mix(
      this._gridElBounds.height!,
      this._focusedElBounds.height!,
      data.isFocused
    );

    this._defaultScale.x = scaleFactor * assetSizeRatio;
    this._defaultScale.y = scaleFactor;
    this._mesh.material.uniforms.uPlaneRes.value = [
      this._defaultScale.x,
      this._defaultScale.y,
    ];
  }

  resetExtraScrollGrid() {
    this._extraScrollGrid.x = 0;
  }

  setStageSize(size: Sizes) {
    this._stageSize = size;
    this._mesh.material.uniforms.uStageRes.value = [size.width, size.height];
  }

  setAsset(assetNorm: LoadedAssetsProps, assetBlur: Texture) {
    this._loadedAsset = assetNorm;
    this._mesh.material.uniforms.tMap.value = assetNorm.asset;
    this._mesh.material.uniforms.tMapBlur.value = assetBlur;
    this._mesh.material.uniforms.uMediaRes.value = [
      assetNorm.naturalWidth,
      assetNorm.naturalHeight,
    ];
  }

  onMouseEnter() {
    super.onMouseEnter();
    if (1 !== data.isFocused) {
      document.body.style.cursor = "pointer";
      this.dispatchEvent({
        // @ts-ignore
        type: "pointerover",
      });
    }
    data.isFocused < 0.5 &&
      this._animateScaleGrid({
        destination: 1.25,
      });
  }

  onMouseLeave() {
    super.onMouseLeave();
    document.body.style.cursor = "initial";
    this.dispatchEvent({
      // @ts-ignore
      type: "pointerleft",
    });
    this._animateScaleGrid({
      destination: 1,
    });
  }

  _handleInfinityScroll() {
    if (!this._mesh || !data.scrollValuesGrid || data.isFocused !== 0) return;

    const gridElWidth = this._gridElBounds.width! * data.avatarsArray!.length;

    if (
      data.scrollValuesGrid.direction.x === "left" &&
      this._mesh.position.x <
        -this._stageSize.width! / 2 - gridElWidth * Grid.disappearOffset
    ) {
      this._extraScrollGrid.x! -= gridElWidth;
    }

    if (
      data.scrollValuesGrid.direction.x === "right" &&
      this._mesh.position.x >
        this._stageSize.width! / 2 + gridElWidth * Grid.disappearOffset
    ) {
      this._extraScrollGrid.x! += gridElWidth;
    }
  }

  _updateX(scrollPosition: number) {
    if (
      this._mesh &&
      this._focusedElBounds &&
      data.scrollValuesGrid &&
      this.avatarItem
    ) {
      let tempVar: AvatarsProps;
      const widthDifference = this._focusedElBounds.width! - this._mesh.scale.x;
      const itemOrderRatio =
        (this.avatarItem.order! - 0.5 * data.avatarsArray!.length) /
        data.avatarsArray!.length;

      this._focusedNormalizedProgress =
        (data.focusedModProgress + itemOrderRatio) % 1;
      this._focusedNormalizedProgress < 0 &&
        (this._focusedNormalizedProgress = Math.abs(
          this._focusedNormalizedProgress + 1
        ));

      const sineValue = -(
        250 * Math.sin(this._focusedNormalizedProgress * Math.PI * 2)
      );

      this._mesh.position.z = mix(sineValue / 25, sineValue, data.isFocused);

      const blurStart = interpolate(
        this._focusedNormalizedProgress,
        0.45,
        0.48,
        1,
        0
      );
      const blurEnd = interpolate(
        this._focusedNormalizedProgress,
        0.55,
        0.5800000000000001,
        0,
        1
      );

      this._mesh.material.uniforms.uIsBlurred.value = mix(
        0,
        blurStart + blurEnd,
        data.isFocused
      );
      this._focusedNormalizedProgress >= 0.45 &&
        this._focusedNormalizedProgress <= 0.5800000000000001 &&
        this._setFocusedIndex(this.avatarItem.order);

      const ellipseWidth = this._focusedElBounds.width! * Grid.ellipseX;
      const ellipseOffset =
        ellipseWidth *
          Math.cos(this._focusedNormalizedProgress * Math.PI * 2 + Math.PI) -
        ellipseWidth;
      const positionX =
        this._focusedElBounds.left! + widthDifference / 2 + ellipseOffset;
      const centerXOffset =
        (this._gridElBounds.width! - this._mesh.scale.x) / 2;
      const itemOrderWidth =
        ((null === (tempVar = this.avatarItem) || void 0 === tempVar
          ? void 0
          : tempVar.order) || 0) * this._gridElBounds.width!;
      const scrollOffset =
        this._gridElBounds.left! +
        centerXOffset +
        itemOrderWidth +
        data.scrollValuesGrid.current.x! -
        this._extraScrollGrid.x!;
      const finalPositionX = mix(scrollOffset, positionX, data.isFocused);

      this._mesh.position.x =
        scrollPosition -
        this._stageSize.width! / 2 +
        this._mesh.scale.x / 2 +
        finalPositionX;
    }
  }

  _updateY(scrollPosition: number) {
    let fixedPositionScroll: number;
    if (this._mesh && this._focusedElBounds) {
      switch (window.innerWidth) {
        case 479.98:
          fixedPositionScroll = 134;
          break;
        case 767.98:
          fixedPositionScroll = 150;
          break;
        case 991.98:
          fixedPositionScroll = 128;
          break;
        case 1023.98:
          fixedPositionScroll = 136;
          break;
        case 1199.98:
          fixedPositionScroll = 153;
          break;
        default:
          fixedPositionScroll = 100;
          break;
      }
      const verticalOffset = 0.35 * this._focusedElBounds.height!;
      const sineValue =
        -Math.sin(this._focusedNormalizedProgress * Math.PI * 2) *
        verticalOffset;
      const itemOffset = -fixedPositionScroll - sineValue;
      const gridOffset = -this._gridElBounds.top!;
      const finalOffset = mix(gridOffset, itemOffset, data.isFocused);
      this._mesh.position.y =
        scrollPosition +
        this._stageSize.height! / 2 -
        this._mesh.scale.y / 2 +
        finalOffset;
    }
  }

  setFocusedElBounds(bounds: AvatarOptions & Holder) {
    this._focusedElBounds = bounds;
  }

  setGridElBounds(bounds: AvatarOptions & Holder) {
    this._gridElBounds = bounds;
  }

  update(event: UpdateProps) {
    super.update(event);
    this._mesh.material.uniforms.uTime.value = 0.001 * event.time!;

    let sineValue = -Math.sin(this._focusedNormalizedProgress * Math.PI * 2);
    let scaledSineValue = (sineValue + 1) * 0.5 + 0.5;
    scaledSineValue -= 0.15 * sineValue;

    let interpolatedScale = mix(
      this._scaleFactorGrid,
      scaledSineValue,
      data.isFocused
    );
    let scaleX = this._defaultScale.x! * interpolatedScale;
    let scaleY = this._defaultScale.y! * interpolatedScale;

    this._mesh.scale.x = scaleX;
    this._mesh.scale.y = scaleY;

    let offsetY = (scaleY - this._defaultScale.y!) / 2;
    // let offsetX = (scaleX - this._defaultScale.x!) / 2

    this._updateX(0);
    this._updateY(offsetY);
    this._handleInfinityScroll();
  }

  destroy() {
    super.destroy();
    this._material.dispose();
    this.remove(this._mesh);
    this._scaleGridTween && this._scaleGridTween.stop();
  }
}

Grid.disappearOffset = 0.15;
Grid.ellipseX = 1.05;
