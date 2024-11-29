import React, { useState } from "react";
import { useParams } from "react-router-dom";
import QuizPage from "../../pages/QuizPage/QuizPage";

function QuizTopicCard({ question, onSuccess }) {
  const [currentAnswer, setAnswer] = useState("");

  const changeAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const checkAnswer = () => {
    if (question.right_answer.toLowerCase() === currentAnswer.toLowerCase()) {
      alert(" :)");
      onSuccess(question.id);
      return;
    }

    alert(" :(");
  };

  return (
    <div className="card" style={{ width: "36rem" }}>
      <img src={question.img} className="card-img-top" width={200} height={200}/>
      <div className="card-body">
        <h5 className="card-title">Вопрос #{question.id}</h5>
        <p className="card-text">{question.quiz_question}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
        <p className="card-text">{question.answer1}</p>
        <p className="card-text">{question.answer2}</p>
        <p className="card-text">{question.answer3}</p>
        <p className="card-text">{question.answer4}</p>
          <input
            value={currentAnswer}
            onChange={changeAnswer}
            className="form-control"
            placeholder="введите ответ"
          />
        </li>
        <li className="list-group-item">
          <a onClick={checkAnswer} className="btn btn-primary">
            Ответить
          </a>
        </li>
        <li className="list-group-item">
          <a href="#" className="btn btn-secondary">
            Дальше
          </a>
        </li>
      </ul>
    </div>
  );
}

export default QuizTopicCard;
