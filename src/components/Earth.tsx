"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("earth.glb");
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = 0.05 * clock.getElapsedTime();
    }
  });

  return <primitive object={scene} ref={meshRef} />;
};

const RotatingLight = () => {
  const lightRef = useRef();

  useFrame(({ clock }) => {
    if (lightRef.current) {
      const time = clock.getElapsedTime();
      const slowdownFactor = 5; // Increase this value to slow down the rotation
      const adjustedTime = time / slowdownFactor;

      lightRef.current.position.x = Math.sin(adjustedTime) * 5; // Multiplied by 5 for a wider orbit
      lightRef.current.position.z = Math.cos(adjustedTime) * 5; // Multiplied by 5 for a wider orbit
    }
  });

  return (
    <directionalLight ref={lightRef} position={[0, 0, 200]} intensity={1} />
  );
};

const Earth = () => {
  return (
    <Canvas camera={{ position: [0, 0, 165] }}>
      <RotatingLight />
      <Model />
    </Canvas>
  );
};

export default Earth;
