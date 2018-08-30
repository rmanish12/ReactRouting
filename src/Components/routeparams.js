import React from 'react'

const routeparams = (props) => {
    return(
        <div>
            RouteParams Page with id: {props.match.params.name}
        </div>
    )
}

export default routeparams