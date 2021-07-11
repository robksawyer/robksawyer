/**
 * @file ShaderGeometry.js
 */
import * as React from "react";
import PropTypes from "prop-types";
import { extend } from "@react-three/fiber";
import { useControls } from "leva";
import { useEdgeSplit } from "@react-three/drei";
import { ColorShiftMaterial } from "@/shaders/colorShift";

extend({ ColorShiftMaterial });

const ShaderGeometry = (props) => {
  // const mesh = useEdgeSplit(Math.PI / 4.5);

  const { time } = useControls({
    time: { value: 1.0, min: 0.0, max: 1.0 },
  });

  // useFrame(({ clock, mouse }) => {
  //   mesh.current.material.uniforms['time'].value = clock.getElapsedTime()
  // })

  return (
    <mesh position={[0, 3, 0]} castShadow>
      <boxGeometry />
      <colorShiftMaterial time={time} />
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
