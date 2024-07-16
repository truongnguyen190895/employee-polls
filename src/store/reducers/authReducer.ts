import { AuthState, AuthActionTypes, LOGIN, LOGOUT } from "../types/auth";
import type { User } from "@/_DATA";

const savedUserJson = localStorage.getItem("user");

const initialState: AuthState = {
  isAuthenticated: Boolean(savedUserJson),
  user: savedUserJson ? JSON.parse(savedUserJson) : null,
  error: null,
};

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN:
      const submittedUser = action.payload;
      localStorage.setItem("user", JSON.stringify(submittedUser));
      return {
        ...state,
        isAuthenticated: true,
        user: submittedUser,
        error: false,
      };

    case LOGOUT:
      localStorage.removeItem("user");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: false,
      };
    default:
      return state;
  }
};
