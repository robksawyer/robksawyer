/**
 * @file ShaderGeometry.js
 */
import * as React from "react";
import * as THREE from "three";
import PropTypes from "prop-types";
import { useFrame, extend } from "@react-three/fiber";
import { useControls } from "leva";
// import { useEdgeSplit } from "@react-three/drei";
import { ColorShiftMaterial } from "@/shaders/colorShift";
import { NoiseMaterial } from "@/shaders/noise";

extend({ ColorShiftMaterial, NoiseMaterial });

const ShaderGeometry = (props) => {
  // const mesh = useEdgeSplit(Math.PI / 4.5);
  const mesh = React.useRef();
  const material = React.useRef();

  // const { time } = useControls({
  //   time: { value: 1.0, min: 0.0, max: 1000.0 },
  // });

  useFrame(({ viewport, size, clock }) => {
    const { width, height } = viewport;
    mesh.current.material.uniforms.resolution.value = new THREE.Vector2(
      width,
      height
    );
    mesh.current.material.uniforms.time.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={mesh} scale={[5, 5, 5]} position={[0, 0, 0]} castShadow>
      <boxGeometry />
      <noiseMaterial />
    </mesh>
  );
};

ShaderGeometry.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default"]),
  children: PropTypes.node,
};

export default ShaderGeometry;
