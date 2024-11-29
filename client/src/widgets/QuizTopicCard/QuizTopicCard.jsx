import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function QuizTopicCard() {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);

//     useEffect(() => {
//         TaskApi.getTaskById(+id)
//           .then(({ statusCode, data, error, message }) => {
//             if (error) {
//               antMessage.error(error);
//               return;
//             }
//             antMessage.success(message);
//             if (statusCode === 200) {
//               setTask(data);
//             }
//           })
//           .catch((err) => {
//             console.log(err);
//             antMessage.error(err.message);
//           })
//           .finally(() => {
//             antMessage.info('Загрузка завершена');
//             setLoading(false);
//           });
//       }, [id]);

    return (
        <div>
            
        </div>
    );
}

export default QuizTopicCard;