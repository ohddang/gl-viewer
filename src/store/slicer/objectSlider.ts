import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Group } from "three";

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
		setMaterial: (state, _action: PayloadAction<MaterialPayload>) => {
			const findMesh = (target: Group) => {
				target.children.forEach((child) => {
					if (child.type.toLowerCase() === "mesh") {
					}
				});
			};

			findMesh(state);
		},
	},
});

export const { setMaterial } = objectSlice.actions;

export default objectSlice.reducer;
