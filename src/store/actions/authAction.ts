import type { User, Answers } from "@/_DATA";
import {
  LOGIN,
  LOGOUT,
  AuthActionTypes,
  UPDATE_USER_ANSWERS,
} from "../types/auth";

export const login = (user: User): AuthActionTypes => ({
  type: LOGIN,
  payload: user,
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT,
});

export const updateUserAnswers = (answers: Answers): AuthActionTypes => ({
  type: UPDATE_USER_ANSWERS,
  payload: answers,
});
