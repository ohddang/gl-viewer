import { useEffect, useRef } from "react";
import { Cube, Engine } from "garo";
import styled from "styled-components";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const engine = new Engine({ canvas: canvasRef.current! });

    const cube = new Cube(engine.getContext(), 0, 0, -1);

    engine.addObject(cube);
    engine.render();
  }, []);

  return (
    <Wrapper>
      <View ref={canvasRef}></View>
      <UI>
        <LeftTab></LeftTab>
        <MiddleArea>
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
  justify-content: flex-end;
  flex: 1;
  pointer-events: none;
`;

const BottomTab = styled.div`
  height: 300px;
  background-color: #404040;
`;

const RightTab = styled.div`
  width: 300px;
  background-color: #404040;
`;

export default App;
