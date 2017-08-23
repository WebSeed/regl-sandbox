// Fragment Shader

precision highp float;

varying vec3 color;
varying vec3 lighting;

void main() {
  // gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
  // gl_FragColor = vec4(color, 1.0);
  gl_FragColor = vec4(lighting * color, 1.0);
}