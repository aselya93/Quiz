import React, {useEffect, useState} from 'react';
import QuizPage from '../../pages/QuizPage/QuizPage';
import QuizTopicCard from '../QuizTopicCard/QuizTopicCard';

function QuizQuestionList(props) {
    const [questions, setQuestions] = useState([])
    const [status, setStatus] = useState(false);

    useEffect(() => {
        loadFlashcards(topicId)
    }, [status])

    async function loadFlashcards(topicId) {

        const response = await fetch(`/api/quiz/${topicId}/flashcards`);
        const data = await response.json()
        if (Array.isArray(data)) {
            setFlashcards(data)
        }
    }

    let success = (flashcardId) => {
        flashcards = flashcards.filter(
            (el) => el.id !== flashcardId
        );
        setFlashcards(flashcards);
    }

    console.log(flashcards);
    

    return (
        <div className="flashcardList">
            {/* {flashcards.map((el) => <QuizTopicCard onSuccess={success} key={el.id}question={el}/>)} */}
        </div>
    );
}

export default QuizQuestionList;
