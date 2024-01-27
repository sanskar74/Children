import React, { useState } from "react";

const Counter = () =>{

    const[num, setNum] = useState(0);

    function Increase(){
        setNum(num+1);  
    }

    return(
        <div>
            <h1>Counter App</h1>
            <h2>num : {num}</h2>
            <button onClick={Increase}>Increase</button>
            <button onClick={()=>setNum(num-1)} >Decrease</button>
            <hr></hr>
        </div>
    )
}
export default Counter;