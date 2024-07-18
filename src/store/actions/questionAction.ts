import { GET_QUESTIONS, QuestionActionTypes } from "../types/question";
import { Question } from "@/_DATA";

export const getAllQuestion = (questions: Question[]): QuestionActionTypes => ({
  type: GET_QUESTIONS,
  payload: questions,
});
