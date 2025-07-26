// @ts-nocheck
import { useRef } from "react";
import styled from "styled-components";
import { useSceneStore } from "../store/sceneStore";

export const SceneUI = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setModelUrl } = useSceneStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileUrl = URL.createObjectURL(file);
    setModelUrl(fileUrl);
  };

  return (
    <Container>
      <input type="file" accept=".obj" ref={inputRef} style={{ display: "none" }} onChange={handleChange} />
      <LoadButton onClick={() => inputRef.current?.click()}>
        <svg width="20%" height="20%" viewBox="0 0 500 500">
          <title>Load file icon</title>
          <path d="M256,64 L256,128 L384,192 L256,256 L128,192 L256,128 Z" fill="white" />
          <path d="M256,128 L256,192 L384,256 L256,320 L128,256 L256,192 Z" fill="white" />
        </svg>
        <p>Load File</p>
      </LoadButton>
    </Container>
  );
};

const LoadButton = styled.div<any>`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
`;

const Container = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #50505050;

    ${LoadButton} {
      opacity: 1;
      visibility: visible;
    }
  }
`;
