import React from 'react'
import Main from './Components/Main'
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component{
    render(){
        return(
            //BrowserRouter is used to make the application work with routing
            //We can do this either in App.js or index.js by wrapping <App/> component in it
            <BrowserRouter>
            <div>
                <Main/>
            </div>
            </BrowserRouter>
        )
    }
}

export default App