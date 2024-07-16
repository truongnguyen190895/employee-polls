import type { User } from "@/_DATA";
import { LOGIN, LOGOUT, AuthActionTypes } from "../types/auth";

export const login = (user: User): AuthActionTypes => ({
  type: LOGIN,
  payload: user,
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT,
});
