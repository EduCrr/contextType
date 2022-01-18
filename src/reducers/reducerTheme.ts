import { reducerActionType } from "../types/reducerActionType";

export type ThemeReducerType = {
  status: "dark" | "light";
};

export const initialStateTheme: ThemeReducerType = {
  status: "dark",
};

export const ThemeReducer = (
  state: ThemeReducerType,
  action: reducerActionType
) => {
  switch (action.type) {
    case "CHANGE_Status":
      return { ...state, status: action.payload.status };
      break;
  }
  return state;
};
