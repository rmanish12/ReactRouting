import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import First from './First'
import Second from './Second'
import RouteParams from './routeparams'

const main = (props) => {
    return(
        <div>
            <div>
                <h2>Main Page</h2>
                <ul>
                    {/* Using anchor tag will simply reload the page which will result into loss of all the state
                    which is not acceptable. */}
                    {/* <li><a href = "/1">First Page</a></li>
                    <li><a href = "/2">Second Page</a></li> */}

                    {/* What we actually want is not to reload the whole page but to re-render only a portion of that
                    page. For this, we will use the <Link/> tag of the react-router-dom */}
                    <li><Link to = "/">Home Page</Link></li>
                    <li><Link to = "1">First Page</Link></li>
                    {/* Another way of using <Link/> where we can assign other properties */}
                    <li><Link to = {{
                        pathname : '/2',
                        hash : '#submit',
                        search: '?quick-submit=true'
                    }}>Second Page</Link></li>
                </ul>
            </div>
            
            {/* For direct rendering, we can use this approach */}
            {/* <Route path = '/' exact render = {() => <div>Home Page</div>}/> */}

            {/* For rendering through components, we can use this approach */}
            <Switch>
                {/* Switch is used to render only the first match that is found and not all. We can use Route inside and outside
                Switch as well at the same time*/}
                <Route path = '/' exact component = {Home}/>
                <Route path = '/1' exact component = {First}/>
                <Route path = '/2' exact component = {Second}/>
                {/* For RouteParams i.e, sending parameter to next component */}
                <Route path = "/:name" exact component = {RouteParams}/>
                {/* To handle page not found i.e, wrong routing url, we can use this */}
                <Route component = {() => <h2>Page Not Found</h2>}/>
            </Switch>
        </div>
    )
}

export default main