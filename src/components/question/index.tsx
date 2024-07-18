import dayjs from "dayjs";
import { Button } from "../button";

import "./question.style.scss";

interface QuestionProps {
  id?: string;
  author: string;
  timestamp: number;
}

export const Question = ({ author, timestamp }: QuestionProps) => {
  return (
    <div className="question-container">
      <div className="description">
        <h4>{author}</h4>
        <p className="time-stamp">
          {dayjs(timestamp).format("hh:mm A | MM/DD/YYYY")}
        </p>
      </div>
      <div className="action">
        <Button>View</Button>
      </div>
    </div>
  );
};
