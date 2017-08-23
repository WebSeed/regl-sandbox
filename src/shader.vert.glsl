// Vertex shader

precision highp float;

attribute vec3 position, normal;

uniform mat4 projection, view;

// varying vec3 color;
// varying vec3 lighting;

void main() {
  // color = normal;
  // lighting = vec3(1.0, 1.0, 1.0);
  gl_Position = projection * view * vec4(position, 1);

  // vec3 ambientLight = vec3(0.0);

  // vec3 directionalLightColor = vec3(1.0, 1.0, 0.0);
  // vec3 directionalVector = normalize(vec3(0.9, 1.0, 0.5));

  // float directional = max(dot(normal.xyz, directionalVector), 0.0);

  // lighting = ambientLight + (directionalLightColor * directional);
  // color = vec3(1.0, 1.0, 1.0);
}
