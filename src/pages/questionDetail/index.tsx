import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store";
import ArrowBackIcon from "@/assets/icons/arrow-back.svg";
import { Option } from "@/components";
import "./questionDetail.style.scss";

const QuestionDetailPage = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const { questions, allUsers } = useAppSelector((state) => state.question);
  const navigate = useNavigate();
  const activeQuestion = questions.find(
    (question) => question.id === questionId
  );

  if (!activeQuestion) {
    return <></>;
  }
  const { author, optionOne, optionTwo } = activeQuestion;
  const pollCreatedBy = allUsers.find(
    (user) => user.id === activeQuestion.author
  );

  const questionTotalVotes = optionOne.votes.length + optionTwo.votes.length;

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="question-detail-container">
      <div className="navigator">
        <div className="go-back">
          <ArrowBackIcon className="icon" onClick={handleGoBack} />
          <span>Back</span>
        </div>
      </div>
      <div className="question-detail">
        <h3>Poll by {author}</h3>
        <div className="avatar">
          <img src={pollCreatedBy?.avatarURL} alt="user-avatar" width="100%" />
        </div>
        <p>Would You Rather</p>
        <div className="options">
          <Option
            variant="optionOne"
            questionId={questionId ?? ""}
            text={optionOne.text}
            votes={optionOne.votes}
            percentage={optionOne.votes.length / questionTotalVotes}
          />
          <Option
            variant="optionTwo"
            questionId={questionId ?? ""}
            text={optionTwo.text}
            votes={optionTwo.votes}
            percentage={optionTwo.votes.length / questionTotalVotes}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionDetailPage;
