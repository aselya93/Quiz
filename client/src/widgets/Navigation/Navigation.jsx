import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from '../../shared/ui/Button/Button'


export default function Navigation(){
    const navigate = useNavigate()

    return(
        <div>
            <Button text="Викторина!!!!Главная страница" onClick={() => navigate('/')} />
                 <Link to="/quiz" ></Link>

                <Outlet />

        </div>
    )
}