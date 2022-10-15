//#region Import
import globalReducers from './global/global.reducers';
import {ActionType, AppStateType} from './types';
//#endregion Import

export const reducer = (
  state: AppStateType,
  action: ActionType,
): AppStateType => {
  let newState: AppStateType = state;

  newState = globalReducers(newState, action);

  return newState;
};

export default reducer;
