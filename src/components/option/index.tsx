import { Button } from "../button";
import "./option.style.scss";

interface OptionProps {
  text: string;
  totalVote: number;
  percentage: number;
  onClick?: () => void;
}

export const Option = ({
  text,
  totalVote,
  percentage,
  onClick,
}: OptionProps) => {
  return (
    <div className="option-container">
      <div className="text-container">
        <p>{text}</p>
        {Number.isNaN(percentage) ? (
          <></>
        ) : (
          <span className="statistic">
            Total vote: {totalVote} ({(percentage * 100).toFixed(2)})%
          </span>
        )}
      </div>
      <div className="action">Click</div>
    </div>
  );
};
