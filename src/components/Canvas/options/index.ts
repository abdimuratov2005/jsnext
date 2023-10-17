import { Data, AvatarOptions, Config, Options, ParticleMask } from "canvas/shared/types/Options.interface";
import { PlaneGeometry } from "three";
import asset1 from '/public/1.webp';
import asset1Blur from '/public/1_blur.webp';
import asset2 from '/public/2.webp';
import asset2Blur from '/public/2_blur.webp';
import asset3 from '/public/3.webp';
import asset3Blur from '/public/3_blur.webp';
import asset4 from '/public/4.webp';
import asset4Blur from '/public/4_blur.webp';
import asset5 from '/public/5.webp';
import asset5Blur from '/public/5_blur.webp';
import asset6 from '/public/6.webp';
import asset6Blur from '/public/6_blur.webp';
import asset7 from '/public/7.webp';
import asset7Blur from '/public/7_blur.webp';
import asset8 from '/public/8.webp';
import asset8Blur from '/public/8_blur.webp';
import asset9 from '/public/9.webp';
import asset9Blur from '/public/9_blur.webp';
import asset10 from '/public/10.webp';
import asset10Blur from '/public/10_blur.webp';
import assetMask from '/public/mask.webp';

export const data: Data = {
  app: null,
  avatarsArray: [
    {
      name: "Name1",
      description: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: asset1.src,
      imgBlurSrc: asset1Blur.src,
      order: 0,
      assetSizeRatio: 1,
      backgroundColor: [211.25, 50.67, 47.45],
    },
    {
      name: "Name2",
      description: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: asset2.src,
      imgBlurSrc: asset2Blur.src,
      order: 1,
      assetSizeRatio: 1,
      backgroundColor: [72, 20.36, 39.96],
    },
    {
      name: "Name3",
      description: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: asset3.src,
      imgBlurSrc: asset3Blur.src,
      order: 2,
      assetSizeRatio: 1,
      backgroundColor: [3, 42, 42],
    },
    {
      name: "Name4",
      description: "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: asset4.src,
      imgBlurSrc: asset4Blur.src,
      order: 3,
      assetSizeRatio: 1,
      backgroundColor: [240, 4, 13.43],
    },
    {
      name: "Name5",
      description: "5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: asset5.src,
      imgBlurSrc: asset5Blur.src,
      order: 4,
      assetSizeRatio: 1,
      backgroundColor: [33.51, 52.83, 33.06],
    },
    {
      name: "Name6",
      description: "6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: asset6.src,
      imgBlurSrc: asset6Blur.src,
      order: 5,
      assetSizeRatio: 1,
      backgroundColor: [221.54, 48.3, 45.96],
    },
    {
      name: "Name7",
      description: '7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: asset7.src,
      imgBlurSrc: asset7Blur.src,
      order: 6,
      assetSizeRatio: 1,
      backgroundColor: [33.51, 52.83, 42.06],
    },
    {
      name: "Name8",
      description: '8Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: asset8.src,
      imgBlurSrc: asset8Blur.src,
      order: 7,
      assetSizeRatio: 1,
      backgroundColor: [350.3, 40.17, 47.85],
    },
    {
      name: "Name9",
      description: '9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: asset9.src,
      imgBlurSrc: asset9Blur.src,
      order: 8,
      assetSizeRatio: 1,
      backgroundColor: [241, 5, 13.5],
    },
    {
      name: "Name10",
      description: '10Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: asset10.src,
      imgBlurSrc: asset10Blur.src,
      order: 9,
      assetSizeRatio: 1,
      backgroundColor: [242, 5, 15],
    },
  ],
  planeGeometry: new PlaneGeometry(1, 1, 1, 1),
  scrollValuesGrid: {
    current: {
      x: 0,
      y: 0,
    },
    target: {
      x: 0,
      y: 0,
    },
    last: {
      x: 0,
      y: 0,
    },
    direction: {
      x: "left",
      y: "up",
    },
  },
  scrollValuesFocused: {
    current: {
      x: 0,
      y: 0,
    },
    target: {
      x: 0,
      y: 0,
    },
    last: {
      x: 0,
      y: 0,
    },
    direction: {
      x: "left",
      y: "up",
    },
  },
  isFocused: 0,
  focusedModProgress: 0,
  canvasWrapperEl: null!,
  closeFocusEl: null!,
  loadingScreenEl: null!,
  loadingTextEl: null!,
  loadingTextBarEl: null!,
  gridTitleWrapperEl: null!,
  gridHolder: null!,
  focusedHolder: null!,
  defaultBackgroundColor: "#14327b",
  isTouchDevice: false,
};


export const options: Options = {
  motion: {
    DEFAULT_FPS: 60,
    DT_FPS: 16.666666666666668,
    LERP_EASE: .07,
    MOMENTUM_DAMPING: .8,
    MOMENTUM_CARRY: .6
  },
  ISR_TIMEOUT: 5,
  IMAGE: "image",
};


export const avatarOptions: AvatarOptions = {
  bottom: 1,
  height: 1,
  left: 1,
  right: 1,
  top: 1,
  width: 1,
  x: 1,
  y: 1
}

export const defaultConfig: Config = {
  barsCount: 50,
  particlesPerBar: 50,
  randomness: 0,
  randomnessPower: 0,
  zAspectRatio: 2
};

export const particleMask: ParticleMask = {
  src: assetMask.src,
};