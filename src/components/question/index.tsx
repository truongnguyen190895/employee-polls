import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { Button } from "../button";
import { useAppDispatch } from "@/store";
import { getActiveQuestion } from "@/store/actions/questionAction";
import "./question.style.scss";

interface QuestionProps {
  id: string;
  author: string;
  timestamp: number;
}

export const Question = ({ id, author, timestamp }: QuestionProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleViewQuestionDetail = () => {
    dispatch(getActiveQuestion(id));
    navigate(`/questions/${id}`);
  };

  return (
    <div className="question-container">
      <div className="description">
        <h4>{author}</h4>
        <p className="time-stamp">
          {dayjs(timestamp).format("hh:mm A | MM/DD/YYYY")}
        </p>
      </div>
      <div className="action">
        <Button onClick={handleViewQuestionDetail}>View</Button>
      </div>
    </div>
  );
};
