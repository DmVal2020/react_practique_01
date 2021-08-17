import React from 'react'
import classes from './FinishedQuiz.css'

const FinishedQuiz = props=>{
    const right = Object.values(props.results).reduce(
        (total,current)=>{if(current==='success'){total+=1}return total},0
    );
   
    return (
        <div className={classes.FinishedQuiz}>
            <h1>FinishedDDD</h1>
            <ul>
                {props.quiz.map((question,index)=>
                    <li key={index}>
                        <strong>{question.id}.</strong>&nbsp;
                        {question.question}                
                        <i className={(props.results[question.id]==='success'
                            ?'fa fa-check '
                            :'fa fa-times ') +     
                            classes[props.results[question.id]]}>
                        </i>
                    </li>)}
            </ul>
            <p>Правильно {right} из {props.quiz.length}</p>             
            <button>повторить</button>
        </div>
    )

}

export default FinishedQuiz