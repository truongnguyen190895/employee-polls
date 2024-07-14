import { LOGIN, LOGOUT, AuthActionTypes, User } from "../types/auth";

export const login = (user: User): AuthActionTypes => ({
  type: LOGIN,
  payload: user,
});

export const logout = (): AuthActionTypes => ({
  type: LOGOUT,
});
