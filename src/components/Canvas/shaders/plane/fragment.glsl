#define GLSLIFY 1
uniform vec2 uPlaneRes;
uniform vec2 uMediaRes;
uniform vec2 uStageRes;
uniform sampler2D tMap;
uniform sampler2D tMapBlur;
uniform float uTime;
uniform float uIsBlurred;

varying vec2 vUv;

#define PI 3.14159265359

void main() {    
  vec2 ratio = vec2(
    min((uPlaneRes.x / uPlaneRes.y) / (uMediaRes.x / uMediaRes.y), 1.0),
    min((uPlaneRes.y / uPlaneRes.x) / (uMediaRes.y / uMediaRes.x), 1.0)
  );
  
  vec2 uv = vec2(
    vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
    vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
  );
  
  vec4 tMapTxt = texture2D(tMap, uv);    
  vec4 tMapBlurTxt = texture2D(tMapBlur, uv);    
  vec4 finalTxt = mix(tMapTxt, tMapBlurTxt, uIsBlurred);
  gl_FragColor.rgba = finalTxt.rgba;
}