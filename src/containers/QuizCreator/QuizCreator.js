import React, {Component} from 'react'
import classes from './QuizCreator.css'
import Input from '../../components/FinishedQuiz/UI/Input/Input'
import Button from '../../components/FinishedQuiz/UI/Button/Button'

export default class QuizCreator extends Component{
    submitFormHandler = event=>{
        event.preventDefault()
    }
    getQuestionHandler = ()=>{}
    creatTestHandler = ()=>{}
    render(){

        return(
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form onSubmit={this.submitFormHandler}>
                        <Input type="text"/>
                        <hr/>
                        <Input type="text"/>
                        <Input type="text"/>
                        <Input type="text"/>
                        <Input type="text"/>

                        <select></select>

                        <Button 
                            type='primary'
                            onClick={this.getQuestionHandler}
                        >
                            Добавить вопрос
                        </Button>
                        <Button 
                            type='success'
                            onClick={this.creatTestHandler}
                        >
                            Создать тест
                        </Button>

                    </form>
                </div>
            </div>
        )
    }
}