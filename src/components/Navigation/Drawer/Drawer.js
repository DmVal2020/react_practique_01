import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import Backdrop from '../../FinishedQuiz/UI/Backdrop/Backdrop'
import classes from './Drawer.css'

const links= [
    {to:'/',label:'Список',exact:true},
    {to:'/auth',label:'Авторизация',exact:false},
    {to:'/quiz-creator',label:'Создание теста',exact:false}
]
class Drawer extends Component{

    

    renderList(){        
        return links.map((link,index)=>{
            return(
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }
    clickHandler = ()=>{this.props.onClick()}
            
    render(){
        const cls = [classes.Drawer]
        if(!this.props.isOpen){
            cls.push(classes.close)
        }
        return(
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderList()}
                    </ul>
                </nav>
                {this.props.isOpen?<Backdrop onClick={this.props.onClick}/>:null}                               
            </React.Fragment>   
        )
    }
}

export default Drawer