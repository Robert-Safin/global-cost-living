"use client";
import React, { FC } from "react";
import { Canvas } from "@react-three/fiber";

import Model from "./Model";
import RotatingLight from "./RotatingLight";
import useModalLoaded from "@/store/useModalLoaded";

const Earth: FC = () => {

  const {modalLoaded} = useModalLoaded();
  console.log(modalLoaded);


  return (
    <Canvas camera={{ position: [0, 0, 165] }}>
      <RotatingLight />
      <Model />
    </Canvas>
  );
};

export default Earth;
