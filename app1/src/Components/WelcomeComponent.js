import React from "react";
const WelcomeComponent = (props) => {
    let Amishnane = props.Amishnane
    return (
        <div>
            <h1>{props.Amishnane} is awesome,react work!!!</h1>
        </div>
    )
}

export default WelcomeComponent