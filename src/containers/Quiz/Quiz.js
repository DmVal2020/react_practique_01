import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.css'

class Quiz extends Component{
    state={
        answers:[
            {answer:['text1','text2','text3','text4','text5']},
            {answer:['text1','text2','text3','text4','text5']},
            {answer:['text1','text2','text3','text4','text5']}
        ]
    }
    render(){
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz 
                        answer={this.state.answers[0].answer}
                    />
                </div>                
            </div>
        )
    }
}

export default Quiz