import React from "react";
import Hello from "./Components/Hello";
import Counter from "./Components/Counter";

const App = () =>{
  return(
    <div>
      <Hello name="sanskar"/>
      <Hello name="shubham"></Hello>
      <Counter/>
      <Hello>
        <p>I am jadu</p>
        <h3>Sunlight is the source of my energy</h3>
        <h3>I am a battery</h3>
        <h3>I eat sunlight</h3>
        <h3>In simple terms i charge like a battery,e-riksa</h3>
      </Hello>
      
    </div>
  )
}
export default App;