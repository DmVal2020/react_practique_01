import React from 'react'
import AnswersList from '../AnswersList/AnswersList'
import classes from './ActiveQuiz.css'

const ActiveQuiz = props=>
    {return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.numberQuestion}.</strong>&nbsp;
                    {props.question}
                </span>
                <small>{props.numberQuestion} in {props.quantityQuestions}</small>
            </p>
            <AnswersList 
                answer={props.answer}
                onClickAnswer={props.onClickAnswer}
                quizState={props.quizState}
            />
        </div>
    )}

export default ActiveQuiz