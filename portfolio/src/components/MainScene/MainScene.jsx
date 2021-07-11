/**
 * @file MainScene.js
 */
import * as React from "react";
import PropTypes from "prop-types";
import useErrorBoundary from "use-error-boundary";
import { gsap } from "gsap";

import { useControls } from "leva";
import { useInView } from "react-intersection-observer";
import useMobileDetect from "use-mobile-detect-hook";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import { BoxHelper, SpotLightHelper, PointLightHelper } from "three";
import { useHelper, OrbitControls } from "@react-three/drei";
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper";

import styles from "./MainScene.module.css";

import Loader from "../Loader";
import ShaderGeometry from "../ShaderGeometry";

// Effects for the main scene
// const Effects = () => {
//   return <EffectComposer></EffectComposer>;
// };

const Scene = () => {
  // const mesh = React.useRef();
  // const { scene } = useThree();
  const group = React.useRef();

  const spotLight = React.useRef();
  const pointLight = React.useRef();

  // useFrame(({ clock }) => {
  //   mesh.current.rotation.x = (Math.sin(clock.elapsedTime) * Math.PI) / 4;
  //   mesh.current.rotation.y = (Math.sin(clock.elapsedTime) * Math.PI) / 4;
  //   mesh.current.rotation.z = (Math.sin(clock.elapsedTime) * Math.PI) / 4;
  //   mesh.current.position.x = Math.sin(clock.elapsedTime);
  //   mesh.current.position.z = Math.sin(clock.elapsedTime);
  //   group.current.rotation.y += 0.02;
  // });

  // useEffect(() => void (spotLight.current.target = mesh.current), [scene]);
  // useHelper(spotLight, SpotLightHelper, "teal");
  useHelper(pointLight, PointLightHelper, 0.5, "hotpink");
  // useHelper(mesh, BoxHelper, "#272740");
  // useHelper(mesh, VertexNormalsHelper, 1, "#272740");

  return (
    <>
      <pointLight position={[-10, 0, -20]} color="lightblue" intensity={2.5} />
      <group ref={group}>
        <pointLight
          ref={pointLight}
          color="red"
          position={[4, 4, 0]}
          intensity={5}
        />
      </group>
      <spotLight
        castShadow
        position={[2, 5, 2]}
        ref={spotLight}
        angle={0.5}
        distance={20}
      />
      {/* <mesh ref={mesh} position={[0, 2, 0]} castShadow>
        <boxGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="lightblue" />
      </mesh> */}
      <ShaderGeometry />
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <planeBufferGeometry args={[100, 100]} attach="geometry" />
        <shadowMaterial attach="material" opacity={0.5} />
      </mesh>
      <gridHelper args={[30, 30, 30]} />
    </>
  );
};

const MainScene = ({
  tagName: Tag = Canvas,
  className = "",
  variant = "default",
  children = "",
}) => {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  return (
    <ErrorBoundary>
      <Tag
        colorManagement
        shadowMap
        camera={{ position: [-5, 5, 5] }}
        className={`${styles.main_scene} ${
          styles[`main_scene__${variant}`]
        } ${className}`}
        style={{
          width: "100vw",
          height: "calc(100vh - 50px)",
          background: "floralwhite",
        }}
      >
        <fog attach="fog" args={["floralwhite", 0, 20]} />
        <React.Suspense fallback={<Loader />}>
          <Scene />
        </React.Suspense>

        {/* <Effects /> */}
        <OrbitControls />
      </Tag>
    </ErrorBoundary>
  );
};

MainScene.propTypes = {
  tagName: PropTypes.object,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default"]),
};
export default MainScene;
