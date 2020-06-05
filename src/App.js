import React, { useState } from "react";
import "./styles.css";

export const QuizApp = () => {
  const [question, setquestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [submitValidation, Submit] = useState(false);
  const [checkedValue, checkedValueSubmit] = useState("");
  const [allQuestions, selectEachQuestion] = useState([
    {
      questions: "What is the current Year:",
      correctAnswer: "2020",
      Answers: [{ A: "2020" }, { A: "2021" }, { A: "2022" }, { A: "2023" }]
    },
    {
      questions: "What is the current Month:",
      correctAnswer: "June",
      Answers: [{ A: "July" }, { A: "May" }, { A: "June" }, { A: "April" }]
    }
  ]);

  return (
    <div>
      <h1>{allQuestions[question].questions}</h1>
      <div>
        {allQuestions[question].Answers.map(question => {
          return (
            <div>
              <input
                type="radio"
                id="male"
                name="quiz"
                checked={checkedValue === question.A}
                value={question.A}
                onClick={event => {
                  Submit(true);
                  checkedValueSubmit(question.A);
                }}
              />
              <span>{question.A}</span>
            </div>
          );
        })}
      </div>

      {showAnswer ? (
        <p>Answer : {allQuestions[question].correctAnswer}</p>
      ) : null}
      <div>
        <input
          id={"submit-button"}
          value="Previous"
          type="button"
          disabled={question === 0 ? true : false}
          onClick={event => {
            setquestion(question - 1);
            setShowAnswer(false);
            checkedValueSubmit("");
            Submit(false);
          }}
        />
        <input
          id={"submit-button"}
          value="Submit"
          type="button"
          disabled={submitValidation ? false : true}
          onClick={event =>
            alert("correct Answer :" + allQuestions[question].correctAnswer)
          }
        />
        <input
          id={"submit-button"}
          value="Next"
          type="button"
          disabled={question === allQuestions.length - 1 ? true : false}
          onClick={event => {
            setquestion(question + 1);
            setShowAnswer(false);
            checkedValueSubmit("");
            Submit(false);
          }}
        />
        <input
          id={"submit-button"}
          value="Show Answer"
          type="button"
          onClick={event => setShowAnswer(true)}
        />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <QuizApp />
    </div>
  );
}
