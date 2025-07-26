import { Group } from "@ohddang/gl/dist/loaders";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Group = new Group();

interface MaterialPayload {
  meshId: string;
  currentMaterialId: string;
  newMaterialId: string;
}

export const objectSlice = createSlice({
  name: "object",
  initialState: initialState,
  reducers: {
    setMaterial: (state, action: PayloadAction<MaterialPayload>) => {
      const findMesh = (target: Group, currentMaterialId: string, newMaterialId: string) => {
        target.children.forEach((child) => {
          if (child.type.toLowerCase() === "mesh") {
          }
        });
      };

      findMesh(state, action.payload.currentMaterialId, action.payload.newMaterialId);
    },
  },
});

export const { setMaterial } = objectSlice.actions;

export default objectSlice.reducer;
