import { QuestionBoard } from "@/components";
import "./home.style.scss";

const Home = () => {
  return (
    <div className="home-page-container">
      <QuestionBoard variant="new" questions={[]} />
      <QuestionBoard variant="done" questions={[]} />
    </div>
  );
};

export default Home;
