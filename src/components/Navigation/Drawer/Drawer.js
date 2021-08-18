import React,{Component} from 'react'
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
            <nav className={cls.join(' ')}>
                <ul>
                    {this.renderList()}
                </ul>
            </nav>
        )
    }
}

export default Drawer