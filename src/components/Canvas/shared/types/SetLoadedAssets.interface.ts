import {LoadedAssetsProps} from "../types/Options.interface";

export interface SetLoadedAssetsProps {
  particleMask?: LoadedAssetsProps;
}

export interface SetLoadedNames {
  [name: string]: LoadedAssetsProps;
}