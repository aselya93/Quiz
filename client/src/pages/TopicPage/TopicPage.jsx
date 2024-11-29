import Button from '../../shared/ui/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import QuizTopicCard from '../../widgets/QuizTopicCard/QuizTopicCard';
import QuizPage from '../QuizPage/QuizPage';

function TopicPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [score, setScore] = useState(0);
  const [isNameEntered, setIsNameEntered] = useState(false);
  const [topics, setTopics] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter' && username.trim() !== '') {
      setIsNameEntered(true);
    }
  };

  const renderNavBar = () => (
    <nav style={{ padding: '10px', backgroundColor: '#f4f4f4' }}>
      <h3>Приятной игры, {username}!</h3>
      <p>Текущий счёт: {score}</p>
    </nav>
  );

  // Загрузка данных из API
  const loadTopics = async () => {
    try {
      const response = await fetch('/api/quiz/');
      const data = await response.json();
      if (data.statusCode === 200) {
        setTopics(data.data);
      }
    } catch (error) {
      console.error('Ошибка при загрузке тем:', error);
    }
  };

  useEffect(() => {
    if (isNameEntered) {
      loadTopics();
    }
  }, [isNameEntered]);

  return (
    <div>
      {isNameEntered ? (
        <>
          {renderNavBar()}
          <h1>Выбираем тему викторины</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {topics.length > 0 ? (
              topics.map((item) => (
                <div key={item.id} style={{ width: '200px' }}>
                  <Link to={`/quiz/${item.id}`}>
                    <QuizPage
                      title={item.title}
                      image={item.img_path}
                    />
                    <Button text={`Тема: ${item.title}`} />
                  </Link>
            
                  <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <img 
                      src={item.img_path} 
                      alt={item.title} 
                      style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} 
                    />
                  </div>
                </div>
              ))
            ) : (
              <p>Загрузка тем...</p>
            )}
          </div>
        </>
      ) : (
        <div style={{ margin: '20px', textAlign: 'center' }}>
          <h2>Введите ваше имя, чтобы начать</h2>
          <input
            value={username}
            name="username"
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            placeholder="Введите ваше имя"
            style={{ padding: '10px', fontSize: '16px', width: '80%' }}
          />
        </div>
      )}
    </div>
  );
}

export default TopicPage;
