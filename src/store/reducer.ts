// src/store/reducers.ts
import { AppState, AppActionTypes, INCREMENT, DECREMENT } from "./types";

const initialState: AppState = {
  count: 0,
};

export const rootReducer = (
  state = initialState,
  action: AppActionTypes
): AppState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
