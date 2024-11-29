import React, {useEffect, useState} from 'react';
import QuizPage from '../../pages/QuizPage/QuizPage';

function QuizQuestionList(props) {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        setQuestions()
    },[])

    async function loadQuestion() {
        const response = await fetch('/api/quiz');
        const data = await response.json()
        setQuestions(data)
    }

    return (
        <div>
            {questions.map((el) => <QuizPage key={el.id} id={el.id} imgPath={el.img} />)}
        </div>
    );
}

export default QuizQuestionList;
