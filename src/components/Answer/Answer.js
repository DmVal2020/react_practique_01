import React from 'react'
import classes from './Answer.css'

const Answer = props=>{
    const cls = [classes.Answer];
    if(props.quizState){
        cls.push(classes[props.quizState])
    }
    
    return(
        <li className={cls.join(' ')} onClick={()=>props.onClickAnswer(props.answer.id)}>
            {props.answer.text}
        </li>
    )
}

export default Answer