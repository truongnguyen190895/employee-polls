import {
  GET_ALL_QUESTIONS,
  QuestionActionTypes,
  GET_ACTIVE_QUESTION,
  GET_ALL_USERS,
} from "../types/question";
import { Question, User } from "@/_DATA";

export const getAllQuestion = (questions: Question[]): QuestionActionTypes => ({
  type: GET_ALL_QUESTIONS,
  payload: questions,
});

export const getActiveQuestion = (questionId: string): QuestionActionTypes => ({
  type: GET_ACTIVE_QUESTION,
  payload: questionId,
});

export const getAllUsers = (users: User[]): QuestionActionTypes => ({
  type: GET_ALL_USERS,
  payload: users,
});
