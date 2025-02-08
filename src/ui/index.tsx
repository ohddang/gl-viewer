import { Engine, OBJLoader } from "@ohddang/gl";
import { useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  engine: Engine | undefined;
}

export const SceneUI = ({ engine }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFile(file);

    const fileUrl = URL.createObjectURL(file);

    const loader = new OBJLoader();
    loader.load(
      fileUrl,
      (data: any) => {
        console.log(data);
      },
      (percent: number) => {
        console.log("progress : ", percent);
      }
    );
  };

  return (
    <Container>
      <input type="file" accept=".obj" ref={inputRef} style={{ display: "none" }} onChange={handleChange} />
      <LoadButton onClick={() => inputRef.current?.click()}>
        <svg width="20%" height="20%" viewBox="0 0 500 500">
          <path d="M256,64 L256,128 L384,192 L256,256 L128,192 L256,128 Z" fill="white" />
          <path d="M256,128 L256,192 L384,256 L256,320 L128,256 L256,192 Z" fill="white" />
        </svg>
        <p>Load File</p>
      </LoadButton>
    </Container>
  );
};

const LoadButton = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
`;

const Container = styled.div`
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
