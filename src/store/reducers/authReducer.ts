import { v4 as uuid } from "uuid";
import {
  AuthState,
  AuthActionTypes,
  LOGIN,
  LOGOUT,
  type User,
} from "../types/auth";
import Avatar1 from "@/assets/images/avatar-1.png";
import Avatar2 from "@/assets/images/avatar-2.png";
import Avatar3 from "@/assets/images/avatar-3.png";
import Avatar4 from "@/assets/images/avatar-4.png";

const MOCK_USERS: User[] = [
  { id: uuid(), username: "admin", password: "admin", avatar: Avatar1 },
  { id: uuid(), username: "joey", password: "admin", avatar: Avatar2 },
  { id: uuid(), username: "biden", password: "admin", avatar: Avatar3 },
  { id: uuid(), username: "trump", password: "admin", avatar: Avatar4 },
];

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
      const existedUser = MOCK_USERS.find(
        (user) => user.username === submittedUser.username
      );
      if (existedUser && existedUser.password === submittedUser.password) {
        localStorage.setItem("user", JSON.stringify(existedUser));
        return {
          ...state,
          isAuthenticated: true,
          user: existedUser,
          error: false,
        };
      } else {
        return { ...state, error: true };
      }
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
