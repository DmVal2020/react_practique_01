import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.css'

class Quiz extends Component{
    state={
        quiz:[
            {
                question:'Какого цвета небо?',
                rightAnswerId:2,
                answers:[
                    {text:'черный',id:1},
                    {text:'синий',id:2},
                    {text:'красный',id:3},
                    {text:'зеленый',id:4},
                ]
            }
        ]       
    }
    onAnswerClickHandler = (answerId)=>{
        return console.log('Answer Id:',answerId)
    }
    render(){
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz 
                        question={this.state.quiz[0].question}
                        answer={this.state.quiz[0].answers}
                        onClickAnswer={this.onAnswerClickHandler}
                    />
                </div>                
            </div>
        )
    }
}

export default Quiz