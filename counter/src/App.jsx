 
import { useState } from "react";

export default function App()
{
  const [count, setCount] = useState(0);

  function increment()
  {
    if(count<20) setCount(count+1);
    
  }
  function decrement()
  {
    if(count>0) setCount(count-1);
   
  }
  return(
    <>
      <h1>Counter :{count}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  )
}