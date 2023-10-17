// @ts-ignore
import particleFragmentShader from "../shaders/particle/fragment.glsl";
// @ts-ignore
import particleVertexShader from "../shaders/particle/vertex.glsl";
import CustomObject from "./CustomObject";
import { Sizes } from "../shared/types/Size.interface";
import { NormalBufferAttributes, ShaderMaterial, Points, BufferGeometry, FrontSide, BufferAttribute } from 'three'
import { defaultConfig } from "../options";
import { generateVertices } from "../shared/utils/generateVertices";
import { getRandomNumberInRange } from "../shared/utils/getRandomNumberInRange";
import { LoadedAssetsProps } from "../shared/types/Options.interface";
import { UpdateProps } from "../shared/types/UpdateEvent.interface";

export default class Particles extends CustomObject {
  static disappearOffset: number;
  static ellipseX: number;
  _geometry: BufferGeometry<NormalBufferAttributes>;
  _stageSize: Sizes;
  _material: ShaderMaterial;
  _points: Points<BufferGeometry, ShaderMaterial>;

  constructor(_e: any) {
    super();

    this._geometry = new BufferGeometry();
    this._stageSize = {
      width: 1,
      height: 1
    };

    this._updateGeometryAttributes();

    this._material = new ShaderMaterial({
      side: FrontSide,
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      transparent: true,
      wireframe: false,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uPixelRatio: { value: 1 },
        tMap: { value: null },
        uTime: { value: 0 },
        uOpacity: { value: 1 },
        uStageRes: { value: [0, 0] },
        uZAspectRatio: { value: defaultConfig.zAspectRatio }
      }
    });

    this._points = new Points(this._geometry, this._material);
    this._points.renderOrder = -1;

    this.add(this._points);
  }

  _updateGeometryAttributes() {
    const pariclePosArray = new Float32Array(generateVertices(defaultConfig));
    this._geometry.setAttribute("position", new BufferAttribute(pariclePosArray, 3));
    const count = this._geometry.attributes.position.count;
    const countArray = new Float32Array(count);

    for (let i = 0; i < count; i++)
      countArray[i] = getRandomNumberInRange(.5, 1);
    this._geometry.setAttribute("aRandom", new BufferAttribute(countArray, 1))
  }

  setAsset(assetNorm: LoadedAssetsProps) {
    this._points.material.uniforms.tMap.value = assetNorm.asset
  }

  setStageSize(e: Sizes) {
    this._stageSize = e;
    let halfStageWidth = .5 * this._stageSize.width!;
    defaultConfig.barsCount = Math.round(.05 * this._stageSize.width!);
    this._stageSize.width! >= 767 ? this._points.position.y = -100 - .2 * this._stageSize.height! : (this._points.position.y = -90 - .15 * this._stageSize.height!,
      halfStageWidth = 1.9 * this._stageSize.width!,
      defaultConfig.barsCount = Math.round(.18 * this._stageSize.width!)),
      this._points.scale.set(halfStageWidth, halfStageWidth, halfStageWidth),
      defaultConfig.particlesPerBar = Math.round(defaultConfig.barsCount / defaultConfig.zAspectRatio! * .5),
      this._updateGeometryAttributes();
  }

  setFloorOpacity(opacity: number) {
    this._points.material.uniforms.uOpacity.value = opacity
  }

  setPixelRatio(pixelRation: number) {
    this._points.material.uniforms.uPixelRatio.value = pixelRation
  }

  update(e: UpdateProps) {
    this._points.material.uniforms.uTime.value = .001 * e.time!
  }

  destroy() {
    this._material.dispose();
    this._geometry.dispose();
    this.remove(this._points)
  }
}

Particles.disappearOffset = .15;
Particles.ellipseX = 1.05;