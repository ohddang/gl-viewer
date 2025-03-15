import { Canvas } from "@ohddang/gl";
import { ComponentClass, ReactNode } from "react";

interface CanvasProps {
  width: number;
  height: number;
  children: ReactNode;
}

const CanvasComponent = Canvas as unknown as ComponentClass<CanvasProps>;

export const Scene = () => {
  return (
    <CanvasComponent width={4192} height={2560}>
      <></>
    </CanvasComponent>
  );
};
