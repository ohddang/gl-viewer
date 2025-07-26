import * as THREE from "three";
import styled from "styled-components";
import Item from "./items";
import { useState } from "react";
import { useSceneStore } from "../../store/sceneStore";

interface Props {
  onSelect: (uuid: string) => void;
}

const ObjectHierarchy = ({ onSelect }: Props) => {
  const { model } = useSceneStore();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (uuid: string) => {
    setSelectedId(uuid);
    onSelect(uuid);
  };

  const render = (data: THREE.Object3D) => {
    if (!data) return null;
    if (data.type === "Group") {
      return (
        <Item data={data} onSelect={handleSelect} isSelected={selectedId === data.uuid}>
          {data.children.map((child) => render(child))}
        </Item>
      );
    } else if (data.type === "Mesh") {
      return <Item key={data.uuid} data={data} onSelect={handleSelect} isSelected={selectedId === data.uuid} />;
    }
  };

  return <LeftTab>{model && render(model)}</LeftTab>;
};

export default ObjectHierarchy;

const LeftTab = styled.div`
  width: 300px;
  height: 100%;
  background-color: #404040;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
