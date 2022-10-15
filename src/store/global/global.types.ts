export enum GlobalTypes {
  setProperties = 'global/setProperties',
  resetState = 'global/resetState',
}

export interface GlobalStateType {
  userLogged: boolean | null;
}

export interface GlobalActionsType {
  setProperties: (key: keyof GlobalStateType, value: any) => void;
  resetState: () => void;
}
