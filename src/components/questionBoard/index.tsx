import { Question } from "../question";
import "./questionBoard.style.scss";

interface QuestionBoardProps {
  variant: "new" | "done";
  questions: any;
}

export const QuestionBoard = ({ variant, questions }: QuestionBoardProps) => {
  return (
    <div className="question-board-container">
      <div className="label-container">
        <h3>{variant === "new" ? "New Questions" : "Done"}</h3>
      </div>
      <div className="question-list-container">
        <Question />
      </div>
    </div>
  );
};
