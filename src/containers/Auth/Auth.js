import React, {Component} from 'react'
import Button from '../../components/FinishedQuiz/UI/Button/Button'
import classes from './Auth.css'

class Auth extends Component {
    submitHandler = (event)=>{
        event.preventDefault()
    }
    authHandler = ()=>{}
    registerHandler = ()=>{}
    render(){
        return(
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form className={classes.AuthForm} onSubmit={this.submitHandler}>
                        <input></input>
                        <input></input>
                        <Button 
                            type='success'
                            onClick={this.authHandler}
                        >
                            Войти
                        </Button>
                        <Button 
                            type='primary'
                            onClick={this.registerHandler}
                        >
                            Регистрация
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth