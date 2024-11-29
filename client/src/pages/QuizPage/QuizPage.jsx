import React, { useEffect, useState } from "react";
import QuizApi from "../../entities/Question/QuizApi";
import Button from "../../shared/ui/Button/Button";
import QuizTopicCard from "../../widgets/QuizTopicCard/QuizTopicCard";
import { useParams } from "react-router-dom";

function QuizPage() {
  const { topicId } = useParams();
  const [flashcards, setFlashcards] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    loadFlashcards(topicId);
  }, [status]);

  async function loadFlashcards(topicId) {
    const response = await fetch(`/api/quiz/${topicId}/questions`);
    const { data } = await response.json();

    if (Array.isArray(data)) {
      setFlashcards(data);
    }
  }

  const successHandler = (flashcardId) => {
    
    const filteredFlashcards = flashcards.filter((el) => el.id !== flashcardId);
    setFlashcards(filteredFlashcards);
  };
  console.log(flashcards);

  return (
    <div className="flashcardList">
      {flashcards.map((el) => (
        <QuizTopicCard key={el.id} question={el} onSuccess={successHandler} />
      ))}
    </div>
  );
}

export default QuizPage;

// return (
//     <div className="card" style={{width: "18rem"}}>
//         <img src={props.img} className="card-img-top"/>
//         <div className="card-body">
//             <h5 className="card-title">{props.nam}</h5>
//             <Link to={'/quiz/' + props.id} className="btn btn-primary">Начать квиз</Link>
//         </div>
//     </div>
// );
