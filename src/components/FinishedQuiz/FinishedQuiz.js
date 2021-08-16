import React from 'react'
import classes from './FinishedQuiz.css'

const FinishedQuiz = props=>{

    return (
        <div className={classes.FinishedQuiz}>
            <h1>FinishedDDD</h1>
            <ul>
                <li><strong>1.</strong>&nbsp;How are You<i className={'fa fa-times ' + classes.success}></i></li>
                <li><strong>2.</strong>&nbsp;How are You<i className={'fa fa-check '+ classes.error}></i></li>
                <li><strong>3.</strong>&nbsp;How are You<i className={'fa fa-times '+ classes.success}></i></li>
            </ul>
            <p>Правильно 4 из 10</p>
            <button>повторить</button>
        </div>
    )

}

export default FinishedQuiz