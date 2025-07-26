import { create } from "zustand";
import type { Object3D } from "three";

interface SceneState {
	modelUrl: string | null;
	setModelUrl: (url: string) => void;
	model: Object3D | null;
	setModel: (model: Object3D) => void;
	clearModel: () => void;
}

export const useSceneStore = create<SceneState>((set) => ({
	modelUrl: null,
	setModelUrl: (url) => set({ modelUrl: url }),
	model: null,
	setModel: (model) => set({ model: model }),
	clearModel: () => set({ model: null, modelUrl: null }),
}));
