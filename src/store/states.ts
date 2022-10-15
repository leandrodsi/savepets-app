import globalState from './global/global.state';
import {AppStateType} from './types';

export const initialState: AppStateType = {
  global: globalState,
};

export default initialState;
