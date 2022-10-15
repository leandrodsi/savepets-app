import {ModalMessage} from 'components/modal';
import React, {createContext, useReducer} from 'react';
import {handleStateLogger} from 'utilities';
import {actionsCreator} from './actions';
import {reducer} from './reducers';
import {initialState} from './states';
import {AppContextProviderType, AppContextStoreType} from './types';

export const AppContext = createContext<AppContextStoreType>(
  {} as AppContextStoreType,
);

const AppContextProvider = ({children}: AppContextProviderType) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = actionsCreator(dispatch);
  handleStateLogger(state);

  return (
    <AppContext.Provider value={{state, dispatch, actions}}>
      {children}
      {ModalMessage({state, dispatch, actions})}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
