export interface Answers {
  [key: string]: string;
}

export interface User {
  id: string;
  password: string;
  name: string;
  avatarURL: string;
  answers: Answers;
  questions: string[];
}

let users: { [key: string]: User } = {
  sarahedo: {
    id: "sarahedo",
    password: "password123",
    name: "Sarah Edo",
    avatarURL: "/images/avatar-1.png",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  tylermcginnis: {
    id: "tylermcginnis",
    password: "abc321",
    name: "Tyler McGinnis",
    avatarURL: "/images/avatar-2.png",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  mtsamis: {
    id: "mtsamis",
    password: "xyz123",
    name: "Mike Tsamis",
    avatarURL: "/images/avatar-3.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionOne",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  zoshikanlu: {
    id: "zoshikanlu",
    password: "pass246",
    name: "Zenobia Oshikanlu",
    avatarURL: "/images/avatar-4.png",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
    },
    questions: [],
  },
};

interface Option {
  votes: string[];
  text: string;
}

interface Base {
  [key: string]: any;
}

export interface Question extends Base {
  id: string;
  author: string;
  timestamp: number;
  optionOne: Option;
  optionTwo: Option;
  answer?: {
    votes: string;
  };
}

let questions: { [key: string]: Question } = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sarahedo"],
      text: "Build our new application with Javascript",
    },
    optionTwo: {
      votes: [],
      text: "Build our new application with Typescript",
    },
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "mtsamis",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "hire more frontend developers",
    },
    optionTwo: {
      votes: ["mtsamis", "sarahedo"],
      text: "hire more backend developers",
    },
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "conduct a release retrospective 1 week after a release",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "conduct release retrospectives quarterly",
    },
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tylermcginnis",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "have code reviews conducted by peers",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "have code reviews conducted by managers",
    },
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "tylermcginnis",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["tylermcginnis"],
      text: "take a course on ReactJS",
    },
    optionTwo: {
      votes: ["mtsamis"],
      text: "take a course on unit testing with Jest",
    },
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "mtsamis",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["mtsamis", "zoshikanlu"],
      text: "deploy to production once every two weeks",
    },
    optionTwo: {
      votes: ["tylermcginnis"],
      text: "deploy to production once every month",
    },
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise<{ [key: string]: User }>((resolve) => {
    setTimeout(() => resolve({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise<{ [key: string]: Question }>((resolve) => {
    setTimeout(() => resolve({ ...questions }), 1000);
  });
}

function formatQuestion({
  optionOneText,
  optionTwoText,
  author,
}: {
  optionOneText: string;
  optionTwoText: string;
  author: string;
}) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question: {
  optionOneText: string;
  optionTwoText: string;
  author: string;
}) {
  return new Promise((resolve, reject) => {
    if (
      !question.optionOneText ||
      !question.optionTwoText ||
      !question.author
    ) {
      reject("Please provide optionOneText, optionTwoText, and author");
    }

    const formattedQuestion = formatQuestion(question);
    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [question.author]: {
          ...users[question.author],
          questions: [
            ...users[question.author].questions,
            formattedQuestion.id,
          ],
        },
      };

      resolve(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({
  authedUser,
  qid,
  answer,
}: {
  authedUser: string;
  qid: string;
  answer: string;
}) {
  return new Promise((resolve, reject) => {
    if (!authedUser || !qid || !answer) {
      reject("Please provide authedUser, qid, and answer");
    }

    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser]?.answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      resolve(true);
    }, 500);
  });
}
