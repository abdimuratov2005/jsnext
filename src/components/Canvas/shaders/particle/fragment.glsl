#define GLSLIFY 1
uniform sampler2D tMap;
uniform float uOpacity;
varying float vDist;

void main() {
  vec4 t1 = texture2D(tMap, gl_PointCoord);
  gl_FragColor.rgba = vec4(vec3(1.0), t1.a * vDist * 0.3 * uOpacity);
}
