"use client";
import React, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";
import { useProgress } from "@react-three/drei";
import useModalLoaded from "@/store/useModalLoaded";

const Model = () => {
  const { active, progress, item } = useProgress();

  const { setModalLoaded } = useModalLoaded();

  useEffect(() => {
    if (progress === 100) setModalLoaded(true);
  }, [progress, setModalLoaded]);

  const { scene } = useGLTF("earth.glb");
  const meshRef = useRef<Object3D | null>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = 0.05 * clock.getElapsedTime();
    }
  });

  return <primitive object={scene} ref={meshRef} />;
};

export default Model;
