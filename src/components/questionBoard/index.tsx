import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { getAllQuestion } from "@/store/actions/questionAction";
import { _getQuestions } from "@/_DATA";
import { Question } from "../question";
import "./questionBoard.style.scss";

interface QuestionBoardProps {
  variant: "new" | "done";
  questions?: any;
}

export const QuestionBoard = ({ variant }: QuestionBoardProps) => {
  const dispatch = useAppDispatch();
  const { questions } = useAppSelector((state) => state.question);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    _getQuestions().then((response) => {
      const currentQuestions = Object.keys(response).map(
        (key) => response[key]
      );
      dispatch(getAllQuestion(currentQuestions));
    });
  }, []);

  const filterQuestionByVariant = () => {
    const userId = user?.id ?? "";

    return questions.filter((question) => {
      const hasVotedOptionOne = question.optionOne.votes.includes(userId);
      const hasVotedOptionTwo = question.optionTwo.votes.includes(userId);

      if (variant === "done") {
        return hasVotedOptionOne || hasVotedOptionTwo;
      } else {
        return !hasVotedOptionOne && !hasVotedOptionTwo;
      }
    });
  };

  return (
    <div className="question-board-container">
      <div className="label-container">
        <h3>{variant === "new" ? "New Questions" : "Done"}</h3>
      </div>
      <div className="question-list-container">
        {filterQuestionByVariant().map((question) => (
          <Question
            key={question.id}
            id={question.id}
            author={question.author}
            timestamp={question.timestamp}
          />
        ))}
      </div>
    </div>
  );
};
