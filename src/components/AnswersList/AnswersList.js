import React from 'react'
import Answer from '../Answer/Answer'
import classes from './AnswersList.css'

const AnswersList = props=>{
    return(
        <ul className={classes.AnswersList}>
            {props.answer.map((text,index)=>

                <Answer 
                    key={index}
                    answerText={text}
                />

            )}
            
        </ul>
    )
}

export default AnswersList