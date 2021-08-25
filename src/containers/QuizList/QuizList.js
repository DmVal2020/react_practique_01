import React , {Component} from 'react'
import { NavLink } from 'react-router-dom';
import classes from './QuizList.css'

const list = [1,2,3,4,5];
class QuizList extends Component {
    
    renderQuiz(){
        return(
            list.map((test,index)=>{
                return(
                    <li key={index}>
                        <NavLink
                            to={'/quiz/'+test}
                            activeClassName={classes.active}
                        >
                            {'Тест ' + test}
                        </NavLink>
                    </li>
                )
                }
            )
        )    
    }
    render(){
        return(
            <div className={classes.QuizList}>
                <div>
                    <h1>Список тестов</h1>
                    <ul>
                        {this.renderQuiz()}                       
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default QuizList