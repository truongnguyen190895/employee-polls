import dayjs from "dayjs";
import { Button } from "../button";

import "./question.style.scss";

export const Question = () => {
  return (
    <div className="question-container">
      <div className="description">
        <h4>sarahedo</h4>
        <p className="time-stamp">
          {dayjs(1468479767190).format("hh:mm A | MM/DD/YYYY")}
        </p>
      </div>
      <div className="action">
        <Button>View</Button>
      </div>
    </div>
  );
};
