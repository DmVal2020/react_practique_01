import React from 'react'
import classes from './Answer.css'

const Answer = props=>{
    return(
        <li className={classes.Answer}>
            {props.answerText}
        </li>
    )
}

export default Answer