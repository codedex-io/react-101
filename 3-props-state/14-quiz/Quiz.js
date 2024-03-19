import React, { useState } from "react";
import Question from "./Question.js";

export default function Quiz() {
  const [questions, setQuestions] = useState([
    "What is the meaning of life?",
    "Is there a 4th of July in Great Britain?",
  ]);

  return (
    <div>
      <Question
        question={questions[0]}
      />
      <Question
        question={questions[1]}
      />
    </div>
  );
}
