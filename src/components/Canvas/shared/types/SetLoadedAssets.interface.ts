import {LoadedAssetsProps} from "./Options.interface";

export interface SetLoadedAssetsProps {
  particleMask?: LoadedAssetsProps;
}

export interface SetLoadedNames {
  [name: string]: LoadedAssetsProps;
}