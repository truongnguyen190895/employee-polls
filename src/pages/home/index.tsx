import { QuestionBoard } from "@/components";
import "./home.style.scss";

const Home = () => {
  return (
    <div className="home-page-container">
      <QuestionBoard variant="new" />
      <QuestionBoard variant="done" />
    </div>
  );
};

export default Home;
