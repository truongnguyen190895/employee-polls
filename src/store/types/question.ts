import type { Question } from "@/_DATA";

export interface QuestionState {
  total?: number;
  questions: Question[];
  activeQuestionId: string | null;
}

export const GET_ALL_QUESTIONS = "GET_QUESTIONS";
export const GET_ACTIVE_QUESTION = "GET_ACTIVE_QUESTION";

interface GetQuestionAction {
  type: typeof GET_ALL_QUESTIONS;
  payload: Question[];
}

interface GetSingle {
  type: typeof GET_ACTIVE_QUESTION;
  payload: string;
}

export type QuestionActionTypes = GetQuestionAction | GetSingle;
