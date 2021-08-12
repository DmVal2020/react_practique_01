import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.css'

class Quiz extends Component{
    state={
        counter:0,
        quiz:[
            {
                question:'Какого цвета небо?',
                rightAnswerId:2,
                id:1,
                answers:[
                    {text:'черный',id:1},
                    {text:'синий',id:2},
                    {text:'красный',id:3},
                    {text:'зеленый',id:4},
                ]
            },
            {
                question:'Какого цвета огурец?',
                rightAnswerId:4,
                id:2,
                answers:[
                    {text:'черный',id:1},
                    {text:'синий',id:2},
                    {text:'красный',id:3},
                    {text:'зеленый',id:4},
                ]
            },
            {
                question:'Какого цвета земля?',
                rightAnswerId:1,
                id:3,
                answers:[
                    {text:'черный',id:1},
                    {text:'синий',id:2},
                    {text:'красный',id:3},
                    {text:'зеленый',id:4},
                ]
            },

        ]       
    }
    onAnswerClickHandler = (answerId)=>{
        this.setState(
            {counter:this.state.counter + 1}
        )
        return console.log('Answer Id:',answerId)
    }
    render(){
        let num = this.state.counter;
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz 
                        question={this.state.quiz[num].question}
                        answer={this.state.quiz[num].answers}
                        numberQuestion={this.state.quiz[num].id}
                        quantityQuestions={this.state.quiz.length}
                        onClickAnswer={this.onAnswerClickHandler}
                    />
                </div>                
            </div>
        )
    }
}

export default Quiz