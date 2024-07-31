import { Box, Button, HStack } from "@yamada-ui/react";
import { useState } from "react";

function CountPreview({count}: {count: number}) {
  return <Box color={"red"}>count: {count}</Box>
}

function App() {
  // let count = 0
  const[count, setCount] = useState(0)
  console.log(count);
  
  return (
    <>
    <CountPreview count={count}/>
    <HStack>
    <Button onClick={function(){
      // count++
      setCount(count+1)
      console.log(count);
      
    }}>+</Button>
    <Button onClick={function(){
      if(count == 0){
        return
      }
      setCount(count-1)
      console.log(count);
      
    }}>-</Button>
    </HStack>
    </>
  )
}

export default App
