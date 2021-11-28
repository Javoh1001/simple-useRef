import React, {useState,useEffect} from 'react';

const UseEffect = () =>{
    const [count, setCount] = useState(0);

    const Incre = () =>{
      setCount((prevState)=>{
         return prevState + 2;
      })
      setCount((prevState)=> prevState + 1)
    }
    const Decr = () =>{
     setCount(count === 0 ? count: count - 1)
   }
    return(
        <>
            <h2>useEffect</h2>
            <h2>Counter: {count}</h2>
            <button type="submit" onClick={Incre}>Click + {count}</button>
            <button type="submit" onClick={Decr}>Click -</button>
        </>
    )
}
export default UseEffect;