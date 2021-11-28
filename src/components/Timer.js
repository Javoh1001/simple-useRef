import React, {useState,useRef,useEffect} from 'react';

function setDefaultValue(){
    const userCount = localStorage.getItem('count');
    return userCount ? +userCount: 0;
}

export const Timer = () =>{
const [count,setCount] =useState(setDefaultValue());
const [isCounting,setIsCounting] = useState(false);
const timerIdRef = useRef(null);
const handleStart = () =>{
    setIsCounting(true);

    timerIdRef.current = setInterval(()=>{
        setCount((prev) => prev + 1);

    }, 1000)
}
const handleStop = () =>{
    clearInterval(timerIdRef.current);
    setIsCounting(false);
}
const handleReset = () =>{
    setCount(0);
    setIsCounting(false);
}
useEffect(()=>{
    console.log('update');
    localStorage.setItem('count',count)
},[count]);

useEffect(()=>{
    if(isCounting){
        timerIdRef.current=setInterval(()=>{
            setCount((prev) => prev + 1)
        },1000)
    }
    return () =>{
        console.log('willUnMount');
        timerIdRef.current && clearInterval(timerIdRef.current);
        timerIdRef.current = null;
    }
},[isCounting])
    return(
        <>
            <h2>Hello Timer</h2>
            <h3>React {count}</h3>
            <button type="submit" onClick={handleStart}>Start</button>
            <button type="submit" onClick={handleStop}>Stop</button>
            <button type="submit" onClick={handleReset}>Reset</button>
        </>
    )
}