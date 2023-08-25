'use client'
import { useState } from 'react'
import Head from 'next/head'
import { NextPage } from 'next'
import { IQuestion, ISelectedAnswer } from '@/interfaces/page'; 
import quiz from '../../pages/api/questions.json'


const Home: NextPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<
    Array<ISelectedAnswer>
  >([]);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  const questions: IQuestion[] = [...quiz];

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
  };

  const handleAnswerOption = (answer: string) => {
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);
  };
  return (
    <div className="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center">
      <Head>
        <title>Quiz App</title>
      </Head>
      {showScore ? (
        <h1 className="text-3xl font-semibold text-center text-primary m-3">
            You scored {score} out of {questions.length}
          {score <= 3 ? (
            <h2 className="bg-red rounded-xl m-2">Entry level</h2>
          ) : score >= 4 && score <= 7 ? (
            <h2 className="bg-lightgreen text-blue rounded-xl m-2">Intermediate Level</h2>
          ) : score >= 8 && score <= 9 ? (
            <h2 className="bg-azure rounded-xl m-2">Expert Level</h2>
          ) : (
            <h2 className="bg-blue rounded-xl m-2">Guru</h2>
          )}
         
          <button
            onClick={() => {
              setShowScore(false);
              setScore(0);
              setCurrentQuestion(0);
              setSelectedOptions([]);
            }}
            className="w-[49%] py-2 bg-green rounded-lg m-3"
          >
            Retry
          </button>
        </h1>
      ) : (
        <>
          <div className="flex flex-col  max-w-lg">
            <h4 className="mt-10 text-xl text-primary/60">
              Question {currentQuestion + 1} of {questions.length}
            </h4>
            <div className="mt-4 text-2xl text-primary">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="flex flex-col max-w-lg">
            {questions[currentQuestion].answerOptions.map((answer, index) => (
              <div
                key={index}
                className="flex items-center w-96 py-4  pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg border-blue rounded-xl"
                onClick={(e) => handleAnswerOption(answer.answer)}
              >
                <input
                  type="radio"
                  name={answer.answer}
                  value={answer.answer}
                  onChange={(e) => handleAnswerOption(answer.answer)}
                  checked={
                    answer.answer ===
                    selectedOptions[currentQuestion]?.answerByUser
                  }
                  className="w-6 h-6 bg-black"
                />
                <p className="ml-6 text-primary">{answer.answer}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full mt-4 text-primary max-w-md">
            <button
              onClick={handlePrevious}
              className="w-[49%] py-3 bg-azure rounded-lg"
            >
              Previous
            </button>
            <button
              onClick={
                currentQuestion + 1 === questions.length
                  ? handleSubmitButton
                  : handleNext
              }
              className="w-[49%] py-3 bg-azure rounded-lg"
            >
              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
  