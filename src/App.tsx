import { Canvas, Engine } from "@ohddang/gl";
import styled from "styled-components";
import { SceneUI } from "./ui";
import ObjectHierarchy from "./components/objectHierarchy";
import * as THREE from "three";
import { useState, useEffect, useRef } from "react";

interface CanvasRef {
  getEngine(): Engine | null;
}

function App() {
  const [model, setModel] = useState<THREE.Object3D>();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [engine, setEngine] = useState<Engine | undefined>();
  const canvasRef = useRef<CanvasRef>(null);

  useEffect(() => {
    if (canvasRef.current) {
      setEngine(canvasRef.current.getEngine() || undefined);
    }
  }, []);

  return (
    <Wrapper>
      <ObjectHierarchy data={model} onSelect={setSelectedId} />
      <MiddleArea>
        <SceneWrapper>
          <Canvas ref={canvasRef} width={4096} height={2560}>
            {/* <Cube position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 1, 1]} type="Cube" /> */}
          </Canvas>
          <SceneUI engine={engine} onLoad={setModel} />
        </SceneWrapper>
        <BottomTab></BottomTab>
      </MiddleArea>
      <RightTab></RightTab>
    </Wrapper>
  );
}

const SceneWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & > canvas {
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
`;

const MiddleArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

const BottomTab = styled.div`
  min-height: 300px;
  background-color: #606060;
`;

const RightTab = styled.div`
  width: 300px;
  background-color: #404040;
`;

export default App;
