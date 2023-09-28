"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { DirectionalLight } from "three";

const RotatingLight = () => {
  const lightRef = useRef<DirectionalLight | null>(null);

  useFrame(({ clock }) => {
    if (lightRef.current) {
      const time = clock.getElapsedTime();
      const slowdownFactor = 5;
      const adjustedTime = time / slowdownFactor;

      lightRef.current.position.x = Math.sin(adjustedTime) * 5;
      lightRef.current.position.z = Math.cos(adjustedTime) * 5;
    }
  });

  return (
    <directionalLight ref={lightRef} position={[0, 0, 200]} intensity={1} />
  );
};

export default RotatingLight;
