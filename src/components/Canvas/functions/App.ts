import Avatars from "./Avatars";
import Preloader from "./Preloader";
import { EventDispatcher, WebGLRenderer, PerspectiveCamera, Texture } from 'three';
import { LoadedAssetsProps } from "../shared/types/Options.interface";
import { LoadingProgress } from "../shared/types/LoadingProgress.interface";
import { data, options, particleMask } from "../options";
import { AssetsLoadedProps } from "../shared/types/AssetsLoaded.interface";
import { resizeDebounced } from "../shared/utils/resizeDebounced";

export class App extends EventDispatcher {
  _rafId: number;
  _isResumed: boolean;
  _lastFrameTime: number;
  _preloader: Preloader;
  _pixelRatio: number;
  _onVisibilityChange: () => void;
  _onAssetsLoaded: (event: AssetsLoadedProps) => void;
  _rendererEl: HTMLElement;
  _renderer: WebGLRenderer;
  _experienceScene: Avatars;
  _onPreloaderProgress: (event: AssetsLoadedProps) => void;
  _renderOnFrame: (e: number) => void;
  _canvas: HTMLCanvasElement;
  _camera: PerspectiveCamera;

  constructor({ rendererEl }: any) {
    super();
    this._rafId = null!;
    this._isResumed = true;
    this._lastFrameTime = null!;
    this._preloader = new Preloader();
    this._pixelRatio = 1;

    this._onVisibilityChange = () => {
      document.hidden ? this._stopApp() : this._resumeApp()
    };

    this._onAssetsLoaded = (e) => {

      this._onResize();
      this._rendererEl.style.opacity = "1";

      Object.entries(e.target!.loadedAssets).forEach((entry) => {
        const asset = (entry[1] as LoadedAssetsProps).asset as Texture;
        if (asset) this._renderer.initTexture(asset);
      });
      // @ts-ignore
      this._experienceScene.setLoadedAssets(e.target.loadedAssets);
    };

    this._onPreloaderProgress = (event: LoadingProgress) => {
      if (data.loadingTextBarEl) {
        data.loadingTextBarEl.style.transform = `scaleX(${event.target!.progress})`;
      }
      if (event.target!.progress === 1) {
        if (data.loadingTextBarEl) {
          data.loadingTextBarEl.style.opacity = "0";
        }

        if (data.loadingScreenEl) {
          data.loadingScreenEl.style.opacity = "0";
        }
      }
    };

    this._renderOnFrame = (event) => {
      this._isResumed = true;
      this._rafId = window.requestAnimationFrame(this._renderOnFrame);
      if (!this._isResumed || !this._lastFrameTime) {
        this._lastFrameTime = window.performance.now();
        this._isResumed = false;
        return;
      }
      const deltaTime = event - this._lastFrameTime;
      const slowDownFactor = deltaTime / options.motion.DT_FPS;
      this._lastFrameTime = event;
      this._experienceScene.update({
        delta: deltaTime,
        slowDownFactor: slowDownFactor,
        time: event
      });

      // @ts-ignore
      this._renderer.render(this._experienceScene, this._camera);
    };

    this._rendererEl = rendererEl;
    this._canvas = document.createElement("canvas");
    this._rendererEl.appendChild(this._canvas);
    this._camera = new PerspectiveCamera();

    this._renderer = new WebGLRenderer({
      canvas: this._canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    this._experienceScene = new Avatars({
      camera: this._camera
    });

    this._onResize();

    this._addListeners();

    this._resumeApp();

    const assetsNormal = data.avatarsArray!.map(avatar => ({
      src: avatar.imgSrc,
      type: options.IMAGE,
      targetName: avatar.name
    }))
    const assetsBlur = data.avatarsArray!.map(avatar => ({
      src: avatar.imgBlurSrc,
      type: options.IMAGE,
      targetName: avatar.name + "_blur"
    }))

    const assetParticles = {
      src: particleMask.src,
      type: "image",
      targetName: "particleMask"
    }
    this._preloader.setAssetsToPreload([...assetsNormal, ...assetsBlur, assetParticles])
  }


  _onResize() {
    const rect = this._rendererEl.getBoundingClientRect();
    const camaraAspectRatio = rect.width / rect.height;

    this._camera.aspect = camaraAspectRatio;
    this._camera.position.z = 1000;
    this._camera.fov = (2 * Math.atan(rect.height / 2 / this._camera.position.z)) * (180 / Math.PI);

    this._renderer.setSize(rect.width, rect.height);
    this._pixelRatio = Math.min(window.devicePixelRatio, 2);
    this._renderer.setPixelRatio(this._pixelRatio);

    this._camera.updateProjectionMatrix();
    this._experienceScene.setPixelRatio(this._pixelRatio);
    this._experienceScene.setStageSize(rect);
  }

  _addListeners() {
    window.addEventListener("resize", resizeDebounced(this._onResize.bind(this)));
    window.addEventListener("visibilitychange", this._onVisibilityChange.bind(this));
    this._preloader.addEventListener("loaded", this._onAssetsLoaded);
    this._preloader.addEventListener("progress", this._onPreloaderProgress);
  }

  _removeListeners() {
    window.removeEventListener("resize", resizeDebounced(this._onResize.bind(this)));
    window.removeEventListener("visibilitychange", this._onVisibilityChange.bind(this));
    this._preloader.removeEventListener("loaded", this._onAssetsLoaded);
    this._preloader.removeEventListener("progress", this._onPreloaderProgress);
  }

  _resumeApp() {
    this._isResumed = true;

    if (!this._rafId) {
      this._rafId = window.requestAnimationFrame(this._renderOnFrame.bind(this));
    }
  }

  _stopApp() {
    if (this._rafId) {
      window.cancelAnimationFrame(this._rafId);
      this._rafId = null!;
    }
  }

  destroy() {
    this._canvas.parentNode!.removeChild(this._canvas);
    this._stopApp()
    this._removeListeners();
    this._renderer.dispose();
    this._experienceScene.destroy();
    this._preloader.destroy();
    data.planeGeometry!.dispose();
    data.focusedModProgress = 0;
    data.isFocused = 0;
  }
}