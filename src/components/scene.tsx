import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { Suspense, useEffect } from "react";
import { useSceneStore } from "../store/sceneStore";

const LoadedModel = ({ url }: { url: string }) => {
  const { setModel } = useSceneStore();
  const obj = useLoader(OBJLoader, url);
  useEffect(() => {
    setModel(obj);
  }, [obj, setModel]);
  return <primitive object={obj} />;
};

export const Scene = () => {
  const { modelUrl } = useSceneStore();
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>{modelUrl && <LoadedModel url={modelUrl} />}</Suspense>
      <OrbitControls />
    </Canvas>
  );
};
