import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.css'

class Quiz extends Component{
    state={
        counter:0,
        quizState:null,
        quiz:[
            {
                question:'Какого цвета небо?',
                rightAnswerId:2,
                id:1,
                answers:[
                    {text:'черный',id:1},
                    {text:'синий',id:2},
                    {text:'красный',id:3},
                    {text:'зеленый',id:4},
                ]
            },
            {
                question:'Какого цвета огурец?',
                rightAnswerId:4,
                id:2,
                answers:[
                    {text:'черный',id:1},
                    {text:'синий',id:2},
                    {text:'красный',id:3},
                    {text:'зеленый',id:4},
                ]
            },
            {
                question:'Какого цвета земля?',
                rightAnswerId:1,
                id:3,
                answers:[
                    {text:'черный',id:1},
                    {text:'синий',id:2},
                    {text:'красный',id:3},
                    {text:'зеленый',id:4},
                ]
            },

        ]       
    }
    onAnswerFinishe = ()=>{
        return this.state.counter + 1 === this.state.quiz.length;
    }
    onAnswerClickHandler = (answerId)=>{
        //проверка на правильный ответ и выход, чтоб не нажать второй клик
        if(this.state.quizState){
            const key = Object.keys(this.state.quizState)[0]
            if(this.state.quizState[key]==='success'){
                return
            }
        }
        if(answerId===this.state.quiz[this.state.counter].rightAnswerId){
            this.setState({quizState:{[answerId]:'success'}})
            const timeout = window.setTimeout(()=>{
                if(!this.onAnswerFinishe()){
                    this.setState({
                        counter:this.state.counter + 1,
                        quizState:null  
                        })                          
                    console.log('Answer Id:',answerId)
                }else{
                    console.log('finished','Answer Id:',answerId)
                }
                window.clearTimeout(timeout)
            },1000)            
        }else{
            this.setState({
                quizState:{[answerId]:'error'}
            })
        }
        
    }
    render(){
        let num = this.state.counter;
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz 
                        question={this.state.quiz[num].question}
                        answer={this.state.quiz[num].answers}
                        numberQuestion={this.state.quiz[num].id}
                        quantityQuestions={this.state.quiz.length}
                        onClickAnswer={this.onAnswerClickHandler}
                        quizState={this.state.quizState}
                    />
                </div>                
            </div>
        )
    }
}

export default Quiz