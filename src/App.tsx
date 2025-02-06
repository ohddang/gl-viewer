import { useEffect, useRef } from "react";
import { Cube, Engine } from "gl";
import styled from "styled-components";
import { vec3 } from "gl-matrix";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const engine = new Engine({ canvas: canvasRef.current! });
    engine.setCanvasSize(4192, 2560);

    const cube = new Cube(engine.getContext(), 0, 0, -1);

    engine.addObject(cube);
    engine.camera.setPosition(0, 0, -2);
    engine.setClearColor(1, 0.9, 0.5, 1);

    setInterval(() => {
      cube.rotation = vec3.fromValues(cube.rotation[0] + 0.01, cube.rotation[1] + 0.02, cube.rotation[2]);
      engine.render();
    }, 1000 / 60);
  }, []);

  return (
    <Wrapper>
      <UI>
        <LeftTab></LeftTab>
        <MiddleArea>
          <View ref={canvasRef}></View>
          <BottomTab></BottomTab>
        </MiddleArea>
        <RightTab></RightTab>
      </UI>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const View = styled.canvas`
  width: 100%;
  height: 100%;
`;

const UI = styled.div`
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
  height: 300px;
  background-color: #606060;
`;

const RightTab = styled.div`
  width: 300px;
  background-color: #404040;
`;

export default App;
