import {ActionType, AppStateType} from '../types';
import {GlobalTypes} from './global.types';

const reducer = (
  state: AppStateType,
  {type, payload}: ActionType,
): AppStateType => {
  const {key, value} = payload;

  if (key) {
    switch (type) {
      case GlobalTypes.setProperties:
        return {
          ...state,
          global: {
            ...state.global,
            [key]: value,
          },
        };
      default:
        return state;
    }
  }

  switch (type) {
    case GlobalTypes.resetState:
      return {
        ...state,
        global: value,
      };

    default:
      return state;
  }
};

export default reducer;
