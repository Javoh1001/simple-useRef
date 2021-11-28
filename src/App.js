import React,{useState,useEffect,useRef} from 'react';
import './App.css';
// import UseEffect from './components/UseEffect';
import {Timer} from './components/Timer';

export const App = () => {
 const inputRef = useRef(null);
 const [timer,setTimer] = useState(false);
 const showTimer = () =>{
   setTimer(!timer)
 }
 useEffect(()=>{
  setTimer(!timer)
 },[]);
 
  const handleRef = () =>{
    inputRef.current.focus();
  }
  useEffect(()=>{
    inputRef.current.focus();
  },[])

  return (
    <>
      <div className="App">
          <h1>React App use reflix</h1>
          <input type="text" ref={inputRef}  placeholder="Enter your name" />
          <button type="submit" onClick={handleRef}>Click</button>
          <button type="submit" onClick={showTimer}>Timer</button>
          {timer && <Timer/>}
      </div>
    </>
  );
}


