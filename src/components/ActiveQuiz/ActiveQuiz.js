import React from 'react'
import AnswersList from '../AnswersList/AnswersList'
import classes from './ActiveQuiz.css'

const ActiveQuiz = props=>
    {return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>2.</strong>&nbsp;
                    How do you do?
                </span>
                <small>2 in 12</small>
            </p>
            <AnswersList 
                answer={props.answer}
            />
        </div>
    )}

export default ActiveQuiz