// import type { Question } from "@/_DATA";
import {
  QuestionState,
  QuestionActionTypes,
  GET_QUESTIONS,
} from "../types/question";

const initialState: QuestionState = {
  questions: [],
};

export const questionReducer = (
  state = initialState,
  action: QuestionActionTypes
): QuestionState => {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, questions: action.payload };

    default:
      return { ...state };
  }
};
