import React, {Component} from 'react'
import classes from './QuizCreator.css'
import {createControl} from '../../form/formFramework/formFramework'
import Input from '../../components/FinishedQuiz/UI/Input/Input'
import Button from '../../components/FinishedQuiz/UI/Button/Button'


function createOptionControl(number){
    return createControl(
        {
            label:`Вариант ${number}`,
            errorMessage:"Значение не может быть пустым"
        },
        {required:true}
    )
}
function createFormControls(){
    return {
            questions:createControl(
                {
                label:"введите вопрос",
                errorMessage:"Поле вопроса не может быть пустым"
                },
                {required:true}
            ),
            option1:createOptionControl(1),
            option2:createOptionControl(2),
            option3:createOptionControl(3),
            option4:createOptionControl(4),
    }
}
export default class QuizCreator extends Component{
    state={
        quiz:[],
        formControls:createFormControls(),
    }
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