import React,{useState,useEffect,useRef} from 'react';
import './App.css';
// import UseEffect from './components/UseEffect';

export const App = () => {
 const inputRef = useRef(null);
 const handleClick = () =>{
   inputRef.current.focus();
 }
  return (
    <>
      <div className="App">
          <h1>React App use reflix</h1>
          <input type="text" ref={inputRef} placeholder="Enter your name" />
          <button type="submit" onClick={handleClick}>Click</button>
      </div>
    </>
  );
}


