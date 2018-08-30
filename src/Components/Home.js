import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{

    constructor(){
        super()
        this.state = {
            name: ''
        }

        this.clickHandler = this.clickHandler.bind(this) 
    }

    clickHandler(){
        // This is used to move through the pages but since <Link/> doesn't work inside a method, we have to use this
       this.props.history.push('/' + this.state.name)
       // this.props.history.replace replaces the current page with existing page and then the back button might not work properly
    }

    render(){
        console.log(this.state.name)
        return(
            <div>
                <div>Home Page</div>
                <input type = "text" 
                value = {this.state.name} 
                onChange = {(event) => {this.setState({name: event.target.value})}}/>
                <button onClick = {this.clickHandler}>Go</button>
                <ul>
                    <li><Link to = {"/" + this.state.name}>{this.state.name}</Link></li>
                    {/* <RouteParams/> */}
                </ul>
                
            </div>
        )
    }
}

export default Home