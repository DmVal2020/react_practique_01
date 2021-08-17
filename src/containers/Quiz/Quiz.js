import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
import classes from './Quiz.css'

class Quiz extends Component{
    state={
        counter:0,
        quizState:null,
        isFinished:false,
        results:{},
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
    retryHandler=()=>
        this.setState({
            counter:0,
            quizState:null,
            isFinished:false,
            results:{},
        })
    onAnswerClickHandler = (answerId)=>{
        const results = this.state.results;
        //проверка на правильный ответ и выход, чтоб не нажать второй клик
        if(this.state.quizState){
            const key = Object.keys(this.state.quizState)[0]
            if(this.state.quizState[key]==='success'){
                return
            }
        }
        if(answerId===this.state.quiz[this.state.counter].rightAnswerId){
            if(!results[this.state.quiz[this.state.counter].id]){
                    results[this.state.quiz[this.state.counter].id]='success';
                }
            this.setState({
                quizState:{[answerId]:'success'},
                results
            })
            const timeout = window.setTimeout(()=>{               
                if(!this.onAnswerFinishe()){
                    this.setState({
                        counter:this.state.counter + 1,
                        quizState:null  
                        })                          
                    console.log('Answer Id:',answerId)
                }else{
                    console.log('finished','Answer Id:',answerId)
                    this.setState({
                        isFinished:true
                    })

                }
                window.clearTimeout(timeout)
            },1000)            
        }else{
            results[this.state.quiz[this.state.counter].id]='error';
            this.setState({
                quizState:{[answerId]:'error'},
                results
            })
        }
        
    }
    render(){
        let num = this.state.counter;
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    {this.state.isFinished
                    ?<FinishedQuiz 
                        quiz={this.state.quiz}
                        results={this.state.results}
                        retry={this.retryHandler}
                    />
                    :<ActiveQuiz 
                        question={this.state.quiz[num].question}
                        answer={this.state.quiz[num].answers}
                        numberQuestion={this.state.quiz[num].id}
                        quantityQuestions={this.state.quiz.length}
                        onClickAnswer={this.onAnswerClickHandler}
                        quizState={this.state.quizState}
                    />
                    }
                    
                </div>                
            </div>
        )
    }
}

export default Quiz