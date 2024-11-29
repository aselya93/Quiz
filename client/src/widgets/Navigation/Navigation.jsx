import { Link, useNavigate } from "react-router-dom";
import Button from '../../shared/ui/Button/Button'


export default function Navigation(){
    const navigate = useNavigate()

    return(
        <div>
            <Button text="Main" onClick={() => navigate('/')} />
                <Link to="/quiz" >
                <Button text="Викторина!!!!"/>
                </Link>

        </div>
    )
}