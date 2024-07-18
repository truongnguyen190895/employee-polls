// import type { Question } from "@/_DATA";
import {
  QuestionState,
  QuestionActionTypes,
  GET_ALL_QUESTIONS,
  GET_ACTIVE_QUESTION,
  GET_ALL_USERS,
} from "../types/question";

const initialState: QuestionState = {
  questions: [],
  activeQuestionId: null,
  allUsers: [],
};

export const questionReducer = (
  state = initialState,
  action: QuestionActionTypes
): QuestionState => {
  switch (action.type) {
    case GET_ALL_QUESTIONS:
      return { ...state, questions: action.payload };
    case GET_ACTIVE_QUESTION:
      return { ...state, activeQuestionId: action.payload };
    case GET_ALL_USERS:
      return { ...state, allUsers: action.payload };

    default:
      return { ...state };
  }
};
