import type { Question, User } from "@/_DATA";

export interface QuestionState {
  total?: number;
  questions: Question[];
  activeQuestionId: string | null;
  allUsers: User[];
}

export const GET_ALL_QUESTIONS = "GET_QUESTIONS";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ACTIVE_QUESTION = "GET_ACTIVE_QUESTION";

interface GetQuestionAction {
  type: typeof GET_ALL_QUESTIONS;
  payload: Question[];
}

interface GetSingle {
  type: typeof GET_ACTIVE_QUESTION;
  payload: string;
}

interface GetAllUser {
  type: typeof GET_ALL_USERS;
  payload: User[];
}

export type QuestionActionTypes = GetQuestionAction | GetSingle | GetAllUser;
