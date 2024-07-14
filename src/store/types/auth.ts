// src/store/types.ts
export interface User {
  id: string;
  username: string;
  password: string;
  avatar?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: boolean | null;
}

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

interface LoginSuccessAction {
  type: typeof LOGIN;
  payload: User;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginSuccessAction | LogoutAction;
