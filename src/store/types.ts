import React, {ReactNode} from 'react';
import {GlobalActionsType, GlobalStateType} from './global/global.types';

export type AppContextStoreType = {
  state: AppStateType;
  dispatch: React.Dispatch<ActionType>;
  actions: AppActionsType;
};

export type AppContextProviderType = {
  children: ReactNode;
};

export interface AppStateType {
  global: GlobalStateType;
}

export interface AppActionsType {
  global: GlobalActionsType;
}

export type ActionType = {
  type: string;
  payload: PayloadType;
};

export type PayloadType = {
  key?: string;
  value: any;
  uuid?: string;
  last4digits?: string;
};
