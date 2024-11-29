import React, { useEffect, useState } from 'react';
import QuizApi from '../../entities/Question/QuizApi';
import Button from '../../shared/ui/Button/Button'

function QuizPage(props) {
   
//     const [selectedAnswer, setSelectedAnswer] = useState(null);
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// console.log(1111, questions);

// async function loadQuestions() {
//     const data = await QuizApi.getAllQuizQuestions();
//     setQuestions(data.data);

// };
//     useEffect(() => {
//         loadQuestions();
//     }, []);

//     if(questions.length === 0 ){
//         return <div>load</div>
//     }

    
// const selectAnswerHandler = (answer) => {
// setSelectedAnswer(answer)
// }

// const nextQuestionHandler = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//         setCurrentQuestionIndex(currentQuestionIndex + 1);
//         setSelectedAnswer(null);
//     }
// };


        console.log(props)
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{props.nam}</h5>
                <Link to={'/quiz/' + props.id} className="btn btn-primary">Начать квиз</Link>
            </div>
        </div>
    );
}

export default QuizPage;