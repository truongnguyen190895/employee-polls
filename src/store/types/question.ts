import type { Question } from "@/_DATA";

export interface QuestionState {
  total?: number;
  questions: Question[];
}

export const GET_QUESTIONS = "GET_QUESTIONS";
// export const LOGOUT = "LOGOUT";

interface GetQuestionAction {
  type: typeof GET_QUESTIONS;
  payload: Question[];
}

// interface LogoutAction {
//   type: typeof LOGOUT;
// }

export type QuestionActionTypes = GetQuestionAction;
