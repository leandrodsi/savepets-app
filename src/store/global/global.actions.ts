import {Dispatch} from 'react';
import {ActionType} from 'store/types';
import {GlobalActionsType, GlobalStateType, GlobalTypes} from './global.types';

const setProperties =
  (dispatch: Dispatch<ActionType>) => (key: any, value: any) =>
    dispatch({
      type: GlobalTypes.setProperties,
      payload: {key, value},
    });

const resetState = (dispatch: Dispatch<ActionType>) => () => {
  return dispatch({
    type: GlobalTypes.resetState,
    payload: {
      value: {
        userLogged: false,
      } as GlobalStateType,
    },
  });
};

const createActions = (dispatch: Dispatch<ActionType>): GlobalActionsType => ({
  setProperties: setProperties(dispatch),
  resetState: resetState(dispatch),
});

export default createActions;
