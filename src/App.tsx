import { useState } from "react";

function CountPreview({count}: {count: number}) {
  return <div>count: {count}</div>
}

function App() {
  // let count = 0
  const[count, setCount] = useState(0)
  console.log(count);
  
  return (
    <>
    <CountPreview count={count}/>
    <button onClick={function(){
      // count++
      setCount(count+1)
      console.log(count);
      
    }}>+</button>
    <button onClick={function(){
      if(count == 0){
        return
      }
      setCount(count-1)
      console.log(count);
      
    }}>-</button>
    </>
  )
}

export default App
