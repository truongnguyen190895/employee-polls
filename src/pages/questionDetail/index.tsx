import { useParams } from "react-router-dom";

const QuestionDetailPage = () => {
  const { questionId } = useParams<{ questionId: string }>();
  return <div>Question with id: {questionId ?? null}</div>;
};

export default QuestionDetailPage;
