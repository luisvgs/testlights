import React, { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { PointLightHelper, SpotLightHelper } from "three";

const SupportLights = () => {
  const group = useRef();
  const pointLight = useRef();
  const light = useRef();
  // useHelper(light, SpotLightHelper, "lightblue");
  // useHelper(pointLight, PointLightHelper, 0.2, "hotpink");
  return (
    <group ref={group}>
      <pointLight
        color={"#f20723"} // Red light from corner
        castShadow
        ref={pointLight}
        distance={6}
        intensity={8}
        position={[-0.52, -0.493, 4.703]}
      />
      <pointLight
        // Light from top
        castShadow
        intensity={1.9}
        position={[0.205, 1.6, 3.05]}
      />
      <spotLight
        castShadow
        intensity={0.1}
        color={"blue"}
        penumbra={1.0}
        ref={light}
        position={[-1.111, -0.232, 7.864]}
      />
    </group>
  );
};

export default SupportLights;