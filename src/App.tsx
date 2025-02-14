import { useEffect, useRef, useState } from "react";
import { Engine } from "@ohddang/gl";
import styled from "styled-components";
import { SceneUI } from "./ui";

function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [engine, setEngine] = useState<Engine>();

  useEffect(() => {
    const newEngine = new Engine({ canvasRef: canvasRef, width: 4192, height: 2560 });
    setEngine(newEngine);

    const { camera, renderer } = newEngine.useEngine();

    camera.setPosition(0, 0, -2);
    renderer.setClearColor(1, 0.9, 0.5, 1);

    setInterval(() => {
      newEngine.render();
    }, 1000 / 60);
  }, []);

  return (
    <Wrapper>
      <LeftTab></LeftTab>
      <MiddleArea>
        <SceneWrapper>
          <Scene ref={canvasRef} />
          <SceneUI engine={engine} />
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
`;

const Scene = styled.canvas`
  width: 100%;
  height: 100%;
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

const LeftTab = styled.div`
  width: 300px;
  background-color: #404040;
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
