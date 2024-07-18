import { useAppSelector } from "@/store";
import "./option.style.scss";

interface OptionProps {
  text: string;
  votes: string[];
  percentage: number;
  onClick?: () => void;
}

export const Option = ({ text, votes, percentage, onClick }: OptionProps) => {
  const { user } = useAppSelector((state) => state.auth);

  const isSelected = votes.includes(user?.id ?? "");
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
      <div className="action">Click</div>
    </div>
  );
};
