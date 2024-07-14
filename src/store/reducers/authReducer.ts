import { v4 as uuid } from "uuid";
import {
  AuthState,
  AuthActionTypes,
  LOGIN,
  LOGOUT,
  type User,
} from "../types/auth";

const MOCK_USERS: User[] = [
  { id: uuid(), username: "admin" },
  { id: uuid(), username: "joey" },
  { id: uuid(), username: "biden" },
  { id: uuid(), username: "trump" },
];

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
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
