import styled from "styled-components";
import * as THREE from "three";

interface Props {
  data: THREE.Object3D;
  isSelected: boolean;
  children?: React.ReactNode;
  onSelect: (uuid: string) => void;
}

const Item = ({ data, children, isSelected, onSelect }: Props) => {
  return (
    <Container>
      <Title $isSelected={isSelected} onClick={() => onSelect(data.uuid)}>
        {`${data.uuid.slice(0, 8)} ${data.type}`}
      </Title>
      {children && <div>{children}</div>}
    </Container>
  );
};

export default Item;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.span<{ $isSelected: boolean }>`
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  user-select: none;
  cursor: pointer;
  background-color: ${({ $isSelected }) => ($isSelected ? "#5090ff" : "transparent")};

  &:hover {
    background-color: ${({ $isSelected }) => ($isSelected ? "#5090ff" : "#808080")};
  }
`;
