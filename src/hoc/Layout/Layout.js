import React, {Component} from 'react';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import MenuToggle from '../../components/Navigation/ToggleMenu/ToggleMenu';
import classes from './Layout.css';

class Layout extends Component {
    state={
        menu:false
    }
    onToggleMenuHandler = ()=>{
        return this.setState({
            menu:!this.state.menu
        })
    }
    menuCloseHandler = ()=>{
        this.setState({
            menu:false
        })
    }
    render(){
        
        return (
            <div className={classes.Layout}>
                <MenuToggle 
                    isOpen={this.state.menu}
                    onToggle={this.onToggleMenuHandler}            
                />
                <Drawer 
                    isOpen={this.state.menu}
                    onClick={this.menuCloseHandler}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;