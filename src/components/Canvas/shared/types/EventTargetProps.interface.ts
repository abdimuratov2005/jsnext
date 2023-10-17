import { LoadedAssetsProps } from 'canvas/shared/types/Options.interface';
import Grid from 'canvas/functions/Grid';

export interface EventTargetProps {
  loadedAssets?: LoadedAssetsProps;
  target?: Grid;
}