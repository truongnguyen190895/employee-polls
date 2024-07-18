import type { User } from "@/_DATA";
import {
  AuthActionTypes,
  AuthState,
  LOGIN,
  LOGOUT,
  UPDATE_USER_ANSWERS,
} from "../types/auth";

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

    case UPDATE_USER_ANSWERS:
      const refreshedUser: AuthState = {
        ...state,
        user: { ...state.user, answers: { ...action.payload } } as User,
      };
      return refreshedUser;
    default:
      return state;
  }
};
