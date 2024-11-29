import React from 'react';
import Button from '../../shared/ui/Button/Button'
import { Link, useNavigate } from 'react-router-dom';


function TopicPage() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Выбираем тему викторины</h1>
            <Link to="/quiz">
                <Button text="Какая-то тема" Перейти к викторине onClick={() => navigate('/quiz')} />
            </Link>
        </div>
    );
}

export default TopicPage;