import React,{Component} from 'react'
import { NavLink } from 'react-router-dom'
import Backdrop from '../../FinishedQuiz/UI/Backdrop/Backdrop'
import classes from './Drawer.css'

const list= ['Home',1,2,3]
class Drawer extends Component{

    renderList(){
        return list.map((text,index)=>{
            return(
                <li key={index}>
                    {
                    typeof(text)==='number'
                    ?<NavLink to={'Page0'+(text)} activeClassName={classes.new}>list {text}</NavLink>
                    :<NavLink to={text} activeClassName={classes.new}>{text}</NavLink>
                    }
                </li>
            )
        })
                
    }
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