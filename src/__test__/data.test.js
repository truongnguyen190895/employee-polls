const {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} = require("../_DATA");

describe("API Tests", () => {
  jest.setTimeout(10000);

  it("should fetch users", async () => {
    const users = await _getUsers();
    expect(users).toHaveProperty("sarahedo");
    expect(users["sarahedo"]).toHaveProperty("id", "sarahedo");
  });

  it("should fetch questions", async () => {
    const questions = await _getQuestions();
    expect(questions).toHaveProperty("8xf0y6ziyjabvozdd253nd");
    expect(questions["8xf0y6ziyjabvozdd253nd"]).toHaveProperty(
      "id",
      "8xf0y6ziyjabvozdd253nd"
    );
  });

  it("should save a new question", async () => {
    const question = {
      optionOneText: "Option One Text",
      optionTwoText: "Option Two Text",
      author: "sarahedo",
    };

    const savedQuestion = await _saveQuestion(question);
    expect(savedQuestion).toHaveProperty("id");
    expect(savedQuestion).toHaveProperty("author", "sarahedo");
    expect(savedQuestion.optionOne.text).toBe("Option One Text");
    expect(savedQuestion.optionTwo.text).toBe("Option Two Text");
  });

  it("should save a question answer", async () => {
    const answer = {
      authedUser: "sarahedo",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };

    const result = await _saveQuestionAnswer(answer);
    expect(result).toBe(true);

    const users = await _getUsers();
    expect(users["sarahedo"].answers["8xf0y6ziyjabvozdd253nd"]).toBe(
      "optionOne"
    );

    const questions = await _getQuestions();
    expect(questions["8xf0y6ziyjabvozdd253nd"].optionOne.votes).toContain(
      "sarahedo"
    );
  });

  it("should throw an error if required fields are missing in _saveQuestion", async () => {
    const question = {
      optionOneText: "",
      optionTwoText: "Option Two Text",
      author: "sarahedo",
    };

    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });

  it("should throw an error if required fields are missing in _saveQuestionAnswer", async () => {
    const answer = {
      authedUser: "",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    };

    await expect(_saveQuestionAnswer(answer)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });

  // Snapshot test
  it("should match the snapshot for users", async () => {
    const users = await _getUsers();
    expect(users.sarahedo.name).toMatchSnapshot();
  });
});
