import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(15)
  
  // let counter = 15;

const addValue = () => {
  // console.log('value added', counter);
   if(counter >= 20){
   counter = 0;
   }
   setCounter(counter + 1);
   setCounter(counter + 1);
   setCounter(counter + 1);
   setCounter(counter + 1);
   
}

const removeValue = () => {
  if(counter <= 0){
    counter = 0;
  }
    setCounter(counter - 1)
  
}

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
