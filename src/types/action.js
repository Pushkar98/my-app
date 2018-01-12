import type { HoldingData } from './data';
type ToggleThemeAction = {
  type: 'app/TOGGLE_THEME',
};


export type Action =
  | ToggleThemeAction;