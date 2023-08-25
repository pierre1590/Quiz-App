export interface ISelectedAnswer {
    answerByUser: string;
  }
  export interface answers {
    answer: string;
    isCorrect?: boolean;
  }
  export interface IQuestion {
    question: string;
    answerOptions: answers[];
  }
  