import styled from "styled-components";
import { SceneUI } from "./ui";
import ObjectHierarchy from "./components/objectHierarchy";
import * as THREE from "three";
import { useState } from "react";
import { Scene } from "./components/scene";
import { useSceneStore } from "./store/sceneStore";

function App() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { model, clearModel } = useSceneStore();

  return (
    <Wrapper>
      <ObjectHierarchy onSelect={setSelectedId} />
      <MiddleArea>
        <SceneWrapper>
          <Scene />
          {!model ? <SceneUI /> : <DeleteButton onClick={clearModel}>Delete Model</DeleteButton>}
        </SceneWrapper>
        <BottomTab></BottomTab>
      </MiddleArea>
      <RightTab></RightTab>
    </Wrapper>
  );
}

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 12px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  z-index: 10;

  &:hover {
    background-color: #cc0000;
  }
`;

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
