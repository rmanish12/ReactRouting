import React from 'react'
import { Route, Link } from 'react-router-dom'
import Third from '../Components/Third'

const first = (props) => {
    console.log(props.match.url)
    return(
        <div>
            <ul>
                <li><Link to = {{
                    pathname : props.match.url + "/3"
                }}>Move to third page</Link></li>
            </ul>
            
            <Route path = {props.match.url + '/3'} exact component = {Third}/>
        </div>
    )
}

export default first