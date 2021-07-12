/**
 * @file shaders/noise/index.js
 * Basic shader setup and material example.
 *
 * Usage:
 *
 *    import { extend } from 'react-three-fiber
 *    import { ColorShiftMaterial } from './shaders/colorShift'
 *
 *    extend({ ColorShiftMaterial })
 *
 *    ... later in the React component
 *    <mesh>
 *      ...
 *      <colorShiftMaterial time={0} ... />
 *    </mesh>
 *
 */
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";

import vertex from "./vertex.glsl";
import fragment from "./fragment.glsl";

/**
 * NoiseMaterial
 * @param {*} uniforms
 */
export const NoiseMaterial = shaderMaterial(
  {
    time: 0.0,
    multiplier: 0.05,
    resolution: new THREE.Vector2(),
    color: new THREE.Color(0, 0, 0),
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
