import React, { createContext, useReducer } from "react";

import {
  UserReducerType,
  initialStateUser,
  userReducer,
} from "../reducers/reducerUser";

import { reducerActionType } from "../types/reducerActionType";

import {
  ThemeReducerType,
  ThemeReducer,
  initialStateTheme,
} from "../reducers/reducerTheme";

type InitialStateType = {
  user: UserReducerType;
  theme: ThemeReducerType;
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};

const initialState = {
  user: initialStateUser,
  theme: initialStateTheme,
};

export const Contexts = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (state: InitialStateType, action: reducerActionType) => ({
  user: userReducer(state.user, action),
  theme: ThemeReducer(state.theme, action),
});

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <Contexts.Provider value={{ state, dispatch }}>
      {children}
    </Contexts.Provider>
  );
};

/*
import { createContext } from "react";

type ContextsType = {
  name: string;
  age: number;
};
const initialState = {
  name: "edu",
  age: 90,
};

export const Context = createContext<ContextsType>(initialState);

export const ContextProvider: React.FC = ({ children }) => {
  return <Context.Provider value={initialState}>{children}</Context.Provider>;
};


*/
