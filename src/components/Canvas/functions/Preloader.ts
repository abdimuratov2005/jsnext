import { EventDispatcher, TextureLoader, Texture } from 'three';
import { options } from '../options';
import { AssetInfo, LoadedAssetsProps } from '../shared/types/Options.interface';

export default class Preloader extends EventDispatcher {
  _assetsLoadedCounter: number;
  _cubeTextureLoader: TextureLoader;
  _assetsToPreload: AssetsToPreloadProps[];
  loadedAssets: LoadedAssetsProps;
  progress: number;

  constructor() {
    super();
    this._assetsLoadedCounter = 0;
    this._cubeTextureLoader = new TextureLoader();
    this._assetsToPreload = [];
    this.loadedAssets = {};
    this.progress = 0;
  }

  _assignAsset(params: LoadedAssetsProps) {
    const { asset, naturalHeight, naturalWidth, objPropertyName, type } = params;
    // @ts-ignore
    this.loadedAssets[objPropertyName!] = {
      type: type,
      asset: asset,
      naturalWidth: naturalWidth,
      naturalHeight: naturalHeight
    };
    this._onAssetLoaded();
  }

  _preloadTextures() {
    if (this._assetsToPreload.length === 0) {
      return this._onLoadingComplete();
    }

    const handleImageLoad = (assetInfo: AssetInfo & AssetsToPreloadProps) => {
      const texture = new Texture();
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = assetInfo.src;
      const assignImageAsset = () => {
        texture.image = image;
        texture.needsUpdate = true;
        this._assignAsset({
          objPropertyName: assetInfo.targetName || assetInfo.src,
          type: options.IMAGE,
          asset: texture,
          naturalWidth: image.naturalWidth,
          naturalHeight: image.naturalHeight
        });
      };

      if (image.complete) {
        return assignImageAsset();
      }

      image.onload = () => {
        assignImageAsset();
      };

      image.onerror = () => {
        this._assignAsset({
          objPropertyName: assetInfo.targetName || assetInfo.src,
          type: options.IMAGE,
          asset: texture,
          naturalWidth: 1,
          naturalHeight: 1
        });
        console.error(`Failed to load image at ${assetInfo.src}`);
      };

    };

    this._assetsToPreload.forEach((assetInfoToPreload) => {
      handleImageLoad(assetInfoToPreload);
    });
  }

  _onAssetLoaded() {
    this._assetsLoadedCounter += 1;
    this.progress = this._assetsLoadedCounter / this._assetsToPreload.length;
    // @ts-ignore
    this.dispatchEvent({
      type: "progress",
    });

    this.progress === 1 && this._onLoadingComplete();
  }

  _onLoadingComplete() {
    // @ts-ignore
    this.dispatchEvent({
      type: "loaded"
    })
  }

  setAssetsToPreload(asset: AssetsToPreloadProps[]) {
    this._assetsToPreload = asset
    this._preloadTextures()
  }
  destroy() {
    Object.entries(this.loadedAssets).forEach((entry) => {
      const asset = entry[1] as any;
      switch (asset.type) {
        case options.IMAGE:
          asset.asset.dispose();
          break;
      }
    });
  }
}