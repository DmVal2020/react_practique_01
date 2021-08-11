import React from 'react'
import AnswersList from '../AnswersList/AnswersList'
import classes from './ActiveQuiz.css'

const ActiveQuiz = props=>
    {return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>2.</strong>&nbsp;
                    {props.question}
                </span>
                <small>2 in 12</small>
            </p>
            <AnswersList 
                answer={props.answer}
                onClickAnswer={props.onClickAnswer}
            />
        </div>
    )}

export default ActiveQuiz