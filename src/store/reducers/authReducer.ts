import { v4 as uuid } from "uuid";
import {
  AuthState,
  AuthActionTypes,
  LOGIN,
  LOGOUT,
  type User,
} from "../types/auth";

const MOCK_USERS: User[] = [
  { id: uuid(), username: "admin", password: "admin" },
  { id: uuid(), username: "joey", password: "admin" },
  { id: uuid(), username: "biden", password: "admin" },
  { id: uuid(), username: "trump", password: "admin" },
];

const initialState: AuthState = {
  isAuthenticated: true,
  user: null,
};

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN:
      // localStorage.setItem("user", JSON.stringify(action.payload));
      const submittedUser = action.payload;
      const existedUser = MOCK_USERS.find(
        (user) => user.username === submittedUser.username
      );
      if (existedUser && existedUser.password === submittedUser.password) {
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      } else {
        return { ...state };
      }
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
