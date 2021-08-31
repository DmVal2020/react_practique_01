import React, {Component} from 'react'
import classes from './QuizCreator.css'
import {createControl} from '../../form/formFramework/formFramework'
import Input from '../../components/FinishedQuiz/UI/Input/Input'
import Button from '../../components/FinishedQuiz/UI/Button/Button'
import Select from '../../components/FinishedQuiz/UI/Select/Select'
import Auxiliary from '../../hoc/Layout/Auxiliary/Auxiliary'


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
        rightAnswerId: 1,
        formControls:createFormControls(),
    }
    submitFormHandler = event=>{
        event.preventDefault()
    }
    getQuestionHandler = ()=>{}
    creatTestHandler = ()=>{}
    changeHandler = (event,controlName)=>{}
    renderControls(){
        return Object.keys(this.state.formControls).map((controlName,index)=>{
            const control = this.state.formControls[controlName]
            return(
                <Auxiliary key={controlName + index}>
                    <Input 
                    key={index}
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    chouldValidate={!!control.validation}
                    erroMessage={control.errorMessage}
                    onChange={event=>this.changeHandler(event.target.value,controlName)}
                    />
                    {index===0 ? <hr/> : null}
                </Auxiliary>                
            )
        })
    }
    selectChangeHandler = event => {
        this.setState({
          rightAnswerId: +event.target.value
        })
    }
    render(){
        const select = <Select
            label="Выберите правильный ответ"
            value={this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
            options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4}
            ]}
        />
        return(
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form onSubmit={this.submitFormHandler}>
                        {this.renderControls()}

                        {select}

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