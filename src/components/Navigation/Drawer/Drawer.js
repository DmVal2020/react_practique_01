import React,{Component} from 'react'
import Backdrop from '../../FinishedQuiz/UI/Backdrop/Backdrop'
import classes from './Drawer.css'

const list= [1,2,3]
class Drawer extends Component{

    renderList(){
        return list.map((text,index)=>{
            return(
                <li key={index}>
                    list {text}
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