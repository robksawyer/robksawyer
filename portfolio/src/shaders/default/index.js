/**
 * @file shaders/defaultShaderMaterial/index.js
 * Basic shader setup and material example.
 *
 * Usage:
 *
 *    import { extend } from 'react-three-fiber
 *    import { defaultShaderMaterial } from './shaders/defaultShaderMaterial'
 *
 *    ... later in the React component
 *    <mesh>
 *      ...
 *      <defaultShaderMaterial time={0} ... />
 *    </mesh>
 *
 */
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

import vertex from "./vertex.glsl";
import fragment from "./fragment.glsl";

/**
 * DefaultShaderMaterial
 * @param {*} uniforms
 */
export const DefaultShaderMaterial = shaderMaterial(
  {
    iTime: 0.0,
    iResolution: new THREE.Vector2(),
    iMouse: new THREE.Vector2(0.0, 0.0),
    texture1: null,
  },
  // vertex shader
  vertex,
  // fragment shader
  fragment,
  (material) => {
    material.side = THREE.DoubleSide;
    // material.flatShading = true
    // material.wrapS = material.wrapT = THREE.MirroredRepeatWrapping
    // material.wireframe = true
    // material.vertexColors = true
    // material.flatShading = true

    // material.defines = {
    //   '#extension GL_OES_standard_derivatives': 'enable',
    // }
    // material.extensions = {
    //   derivatives: true,
    // }
  }
);

extend({ DefaultShaderMaterial });