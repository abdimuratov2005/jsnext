import {App} from "../../functions/App";
import {PlaneGeometry, Texture} from "three";
import {StaticImageData} from "next/image";

type ScrollValuesDirection = "left" | "up" | "right" | "down"

export interface ScrollValues {
  current: Coordinates
  target: Coordinates
  last: Coordinates
  direction: {
    x: ScrollValuesDirection;
    y: ScrollValuesDirection;
  }
}

export interface Data {
  app?: null | App;
  avatarsArray?: AvatarsProps[];
  planeGeometry?: PlaneGeometry;
  scrollValuesGrid?: ScrollValues;
  scrollValuesFocused?: ScrollValues;
  isFocused: number,
  focusedModProgress: number,
  canvasWrapperEl: HTMLElement | null,
  closeFocusEl: HTMLElement | null,
  loadingScreenEl: HTMLElement | null,
  loadingTextEl: HTMLElement | null,
  loadingTextBarEl: HTMLElement | null,
  gridTitleWrapperEl: HTMLElement | null,
  gridHolder: HTMLElement | null,
  focusedHolder: HTMLElement | null,
  defaultBackgroundColor: string,
  isTouchDevice: boolean,
}

export interface AvatarsProps {
  name?: string;
  description?: string;
  imgSrc?: string | StaticImageData;
  imgBlurSrc?: string | StaticImageData;
  order?: number;
  assetSizeRatio?: number;
  backgroundColor?: [
    number,
    number,
    number
  ];
}

export type AssetInfoType = "image"

export interface Options {
  motion: {
    DEFAULT_FPS: number;
    DT_FPS: number;
    LERP_EASE: number;
    MOMENTUM_DAMPING: number;
    MOMENTUM_CARRY: number;
  };
  ISR_TIMEOUT: number;
  IMAGE: AssetInfoType;
}

export interface AssetInfo {
  src?: any;
  targetName?: AssetInfoType;
}

/**
 * Interface `AvatarOptions`.
 *
 * @property `bottom`  bottom.
 * @property `height`  height.
 * @property `left`  left.
 * @property `right`  right.
 * @property `top`  top.
 * @property `width` width.
 * @property `x` coordinate X.
 * @property `y` coordinate Y.
 */
export interface AvatarOptions {
  bottom?: number;
  height?: number;
  left?: number;
  right?: number;
  top?: number;
  width?: number;
  x?: number;
  y?: number;
}

/**
 * Interface `Create Avatar Assets Props`.
 *
 * @param {string} name - name.
 * @param {string} description - description.
 * @param {LoadedAssetsProps} loadedAsset - loadedAsset.
 * @param {string} blurTexture - blurTexture.
 */
export interface CreateAvatarAssetsProps {
  name?: string;
  description?: string;
  loadedAsset?: LoadedAssetsProps;
  blurTexture?: Texture | undefined;
}

/**
 * Interface `Loaded Assets Props`.
 *
 * @param {number} naturalWidth - natural Width.
 * @param {string | Texture} asset - asset.
 * @param {string} type - type.
 * @param {number | string} objPropertyName - object Property Name.
 * @param {number} naturalHeight - natural Height.
 */
export interface LoadedAssetsProps {
  asset?: string | Texture;
  type?: string;
  objPropertyName?: number | string;
  naturalWidth?: number;
  naturalHeight?: number;
}

/**
 * Interface `Config`.
 *
 * @param {number} barsCount - Bars Count.
 * @param {number} particlesPerBar - particle Per Bar.
 * @param {number} randomness - randomness.
 * @param {number} randomnessPower - randomness Power.
 * @param {number} zAspectRatio - z AspectRatio.
 */
export interface Config {
  barsCount?: number;
  particlesPerBar?: number;
  randomness?: number;
  randomnessPower?: number;
  zAspectRatio?: number;
}

export interface ParticleMask {
  src: string | StaticImageData;
}