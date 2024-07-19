import { useState } from "react";
import { _getQuestions, _saveQuestionAnswer, _getUsers } from "@/_DATA";
import { useAppDispatch, useAppSelector } from "@/store";
import { updateUserAnswers } from "@/store/actions/authAction";
import { getAllQuestion, getAllUsers } from "@/store/actions/questionAction";
import "./option.style.scss";

interface OptionProps {
  variant: "optionOne" | "optionTwo";
  questionId: string;
  text: string;
  votes: string[];
  percentage: number;
  onClick?: (state: boolean) => void;
}

export const Option = ({
  text,
  votes,
  variant,
  percentage,
  questionId,
  onClick,
}: OptionProps) => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const isSelected = user?.answers[questionId] === variant;

  const handleVote = () => {
    onClick?.(true);
    _saveQuestionAnswer({
      authedUser: user?.id as string,
      qid: questionId,
      answer: variant,
    }).then(() => {
      _getQuestions()
        .then((response) => {
          const currentQuestions = Object.keys(response).map(
            (key) => response[key]
          );
          dispatch(getAllQuestion(currentQuestions));
          _getUsers().then((response) => {
            const allUserArray = Object.keys(response).map(
              (key) => response[key]
            );
            dispatch(getAllUsers(allUserArray));
            dispatch(
              updateUserAnswers({ ...user?.answers, [questionId]: variant })
            );
          });
        })
        .finally(() => onClick?.(false));
    });
  };

  return (
    <div className={`option-container ${isSelected ? "selected" : ""}`}>
      <div className="text-container">
        <p>{text}</p>
        {Number.isNaN(percentage) ? (
          <></>
        ) : (
          <span className="statistic">
            Total vote: {votes.length} ({(percentage * 100).toFixed(2)})%
          </span>
        )}
      </div>
      <div className="action" onClick={handleVote}>
        Click
      </div>
    </div>
  );
};
