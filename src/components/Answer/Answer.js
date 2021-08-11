import React from 'react'
import classes from './Answer.css'

const Answer = props=>{
    return(
        <li className={classes.Answer} onClick={()=>props.onClickAnswer(props.answer.id)}>
            {props.answer.text}
        </li>
    )
}

export default Answer