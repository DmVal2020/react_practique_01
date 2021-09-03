import axios from 'axios';
import React , {Component} from 'react'
import Loader from '../../components/Loader/Loader'
import { NavLink } from 'react-router-dom';
import classes from './QuizList.css'

class QuizList extends Component {

    state={
        quizes:[],
        loader:true
    }
    
    renderQuiz(){
        return(
            this.state.quizes.map(quiz=>{
                return(
                    <li key={quiz.id}>
                        <NavLink
                            to={'/quiz/'+quiz.id}
                            activeClassName={classes.active}
                        >
                            {quiz.name}
                        </NavLink>
                    </li>
                )
                }
            )
        )    
    }

async componentDidMount(){
    try{
        const response = await axios.get("https://react-practique-1-default-rtdb.firebaseio.com/Quizes.json")
        const quizes = []
        Object.keys(response.data).forEach((key,index)=>{
            quizes.push({
                id:key,
                name:`Тест №${index+1}`
            })
        })
        this.setState({
            quizes,
            loader:false
        })

    }catch(e){
        console.log(e)
    }
}

    render(){
        return(
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    {
                        this.state.loader
                        ?<Loader />
                        :<ul>
                            {this.renderQuiz()}                       
                        </ul>
                    }
                    
                </div>
                
            </div>
        )
    }
}

export default QuizList