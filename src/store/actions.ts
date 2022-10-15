//#region Import
import {Dispatch} from 'react';
import {ActionType, AppActionsType} from './types';

import globalActions from './global/global.actions';

export const actionsCreator = (
  dispatch: Dispatch<ActionType>,
): AppActionsType => ({
  global: globalActions(dispatch),
});
