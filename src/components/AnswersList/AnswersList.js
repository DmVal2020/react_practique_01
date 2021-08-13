import React from 'react'
import Answer from '../Answer/Answer'
import classes from './AnswersList.css'

const AnswersList = props=>{
    return(
        <ul className={classes.AnswersList}>
            {props.answer.map((answer,index)=>

                <Answer 
                    key={index}
                    answer={answer}
                    onClickAnswer={props.onClickAnswer}
                    quizState={props.quizState ? props.quizState[answer.id] : null}
                />

            )}
            
        </ul>
    )
}

export default AnswersList