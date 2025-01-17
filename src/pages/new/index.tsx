import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/store";
import { getAllQuestion, getAllUsers } from "@/store/actions/questionAction";
import { Button, Input } from "@/components";
import { _saveQuestion, _getQuestions, _getUsers } from "@/_DATA";
import "./new.style.scss";

interface Poll {
  fistOption: string;
  secondOption: string;
}

const New = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [pollForm, setPollForm] = useState<Poll>({
    fistOption: "",
    secondOption: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPollForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCreateNewPoll = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { fistOption, secondOption } = pollForm;
    if (!fistOption || !secondOption) {
      window.alert("form can not be empty");
    } else {
      setLoading(true);
      _saveQuestion({
        optionOneText: pollForm.fistOption,
        optionTwoText: pollForm.secondOption,
        author: user?.id ?? "",
      }).then(() => {
        _getQuestions().then((response) => {
          const currentQuestions = Object.keys(response).map(
            (key) => response[key]
          );
          dispatch(getAllQuestion(currentQuestions));
          _getUsers().then((response) => {
            const allUserArray = Object.keys(response).map(
              (key) => response[key]
            );
            dispatch(getAllUsers(allUserArray));
            setLoading(false);
            navigate("/");
          });
        });
      });
    }
  };

  return (
    <div className="new-container">
      <h1>Would You Rather</h1>
      {loading ? <p>loading...</p> : <p>Create Your Own Poll</p>}

      <form>
        <div className="form-group">
          <label htmlFor="option-one">First Option</label>
          <Input
            type="text"
            id="option-one"
            name="fistOption"
            placeHolder="Option One"
            value={pollForm.fistOption}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="option-two">Second Option</label>
          <Input
            type="text"
            id="option-two"
            name="secondOption"
            placeHolder="Option Two"
            value={pollForm.secondOption}
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          className="submit-btn"
          onClick={handleCreateNewPoll}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default New;
