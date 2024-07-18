import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "@/store";
import ArrowBackIcon from "@/assets/icons/arrow-back.svg";
import "./questionDetail.style.scss";

const QuestionDetailPage = () => {
  const { questionId } = useParams<{ questionId: string }>();
  const { questions } = useAppSelector((state) => state.question);
  const activeQuestion = questions.find(
    (question) => question.id === questionId
  );
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };
  console.log("questions ", questions);
  console.log("activeQuestion ", activeQuestion);
  if (!activeQuestion) {
    return <></>;
  }

  return (
    <div className="question-detail-container">
      <div className="navigator">
        <div className="go-back">
          <ArrowBackIcon className="icon" onClick={handleGoBack} />
          <span>Back</span>
        </div>
      </div>
      <div className="question-detail">
        <h3>Poll by {activeQuestion.author}</h3>
        <div className="avatar">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default QuestionDetailPage;
