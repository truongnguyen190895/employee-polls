import { useAppSelector } from "@/store";
import { Question } from "../question";
import "./questionBoard.style.scss";

interface QuestionBoardProps {
  variant: "new" | "done";
  questions?: any;
}

export const QuestionBoard = ({ variant }: QuestionBoardProps) => {
  const { questions } = useAppSelector((state) => state.question);
  const { user } = useAppSelector((state) => state.auth);

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
