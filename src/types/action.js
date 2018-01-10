import type { HoldingData } from './data';
type ToggleThemeAction = {
  type: 'app/TOGGLE_THEME',
};
type AddNewHoldingAction = {
  type: 'cryptos/ADD_NEW_HOLDING',
  coin: HoldingData,
};

export type Action =
  | ToggleThemeAction
  | AddNewHoldingAction;