/**
 * @file shaders/colorShift/index.js
 * Basic shader setup and material example.
 *
 * Usage:
 *
 *    import { extend } from 'react-three-fiber
 *    import { colorShiftMaterial } from './shaders/colorShiftMaterial'
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
 * ColorShiftMaterial
 * @param {*} uniforms
 */
export const ColorShiftMaterial = shaderMaterial(
  {
    time: 0.0,
    color: new THREE.Color(0.2, 0.0, 0.1),
  },
  // vertex shader
  vertex,
  // fragment shader
  fragment,
  (material) => {
    console.log("material", material);
    material.side = THREE.DoubleSide;
    // material.flatShading = true
    // material.wrapS = material.wrapT = THREE.MirroredRepeatWrapping
    // material.wireframe = true;
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
