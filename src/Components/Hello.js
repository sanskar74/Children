import React from "react";

const Hello = (props) =>{

    return(
        <div>
            <h1>I am web developer</h1>
            <h3>I am react devloper</h3>
            {/* <p>I am a Programmer</p> */}
            <p>{props.children}</p>
            <hr></hr>
            
        </div>  
    )
}

export default Hello;