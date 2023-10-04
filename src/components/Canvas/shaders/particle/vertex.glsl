uniform float uTime;
uniform vec2 uCanvasRes;
uniform float uPixelRatio;
uniform float uSize;
uniform float uZAspectRatio;
attribute float aRandom;
varying float vDist;

void main() {
  vec3 stablePosition = position;
  float disOffset = (mod((uTime * 0.02 + 300.0)  * aRandom, 1.0)) - 0.5; //[0-1];
  float dist = 1.0 - length(vec2(stablePosition.x, stablePosition.z * uZAspectRatio));
  float scaleRandom = (sin(uTime * aRandom * 2.0) + 1.0) * 0.5 + 0.5;
  vec4 modelPosition = modelMatrix * vec4(stablePosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;
  gl_PointSize =  uPixelRatio  * 5.5 * scaleRandom;
  gl_PointSize *= (1.0 / - viewPosition.z * 1000.0);
  vDist = dist;
}
