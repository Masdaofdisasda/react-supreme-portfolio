// CustomShader.ts
const CustomShader = {
  uniforms: {
    tDiffuse: { value: null },
    tShadowMap: { value: null },
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform sampler2D tShadowMap;

    void main() {
      vec4 sceneColor = texture2D(tDiffuse, vUv);
      vec4 shadowColor = texture2D(tShadowMap, vUv);
      float mixValue = 0.9; // Adjust this value to control the mix ratio between the shadow map and the scene color

      gl_FragColor = mix(sceneColor, shadowColor, mixValue);
    }
  `,
};

export default CustomShader;
