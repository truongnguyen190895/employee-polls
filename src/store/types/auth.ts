import type { User, Question, Answers } from "@/_DATA";

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: boolean | null;
}

export interface QuestionState {
  total?: number;
  questions: Question[];
}

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS";

interface LoginSuccessAction {
  type: typeof LOGIN;
  payload: User;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface UpdateUserAnswers {
  type: typeof UPDATE_USER_ANSWERS;
  payload: Answers;
}

export type AuthActionTypes =
  | LoginSuccessAction
  | LogoutAction
  | UpdateUserAnswers;
