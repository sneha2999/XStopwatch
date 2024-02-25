import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [isRunning,setIsRunning] = useState(false);
  const [elapsedTime,setElapsedTime] = useState(0)

  useEffect(()=>{
    let intervalID;
    if(isRunning){
      intervalID = setInterval(()=>{
        setElapsedTime((prevTime)=>prevTime+1)
      },1000)
    }else{
      clearInterval(intervalID)
    }
    return ()=>clearInterval(intervalID);
  },[isRunning])

  function startStop(){
    setIsRunning((prevRunning)=>!prevRunning)
  }

  function reset(){
    setIsRunning(false)
    setElapsedTime(0)
  }

  function formatTime(seconds){
    const minute = Math.floor(seconds/60);
    const remainingSec = seconds%60;
    return `${minute}:${remainingSec < 10 ? "0":""}${remainingSec}`;
  }
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <div className='btnContainer'>
        <button onClick={startStop}>{ isRunning?"Stop":"Start" }</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
