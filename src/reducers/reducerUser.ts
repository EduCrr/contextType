import { reducerActionType } from "../types/reducerActionType";

export type UserReducerType = {
  name: string;
  age: number;
};

export const initialStateUser: UserReducerType = {
  name: "",
  age: 0,
};

export const userReducer = (
  state: UserReducerType,
  action: reducerActionType
) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name };
      break;
    case "CHANGE_AGE":
      return { ...state, age: action.payload.age };
      break;
  }
  return state;
};
