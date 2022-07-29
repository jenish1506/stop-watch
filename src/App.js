import './App.css';
import { useState } from 'react'

let adjustInterval = undefined;

function App() {
  const [watch, setWatch] = useState(0)
  const [started, setStarted] = useState(false)

  const startwatch = () => {
    adjustInterval = setInterval(() => {
      setWatch((x) => x + 1)
    }, 1000)
    setStarted(true)
  }
  const stopwatch = () => {
    clearInterval(adjustInterval)
    setStarted(false)
  }
  const resetwatch = () => {
    setWatch(0)
    clearInterval(adjustInterval)
    setStarted(false)
  }

  return (
    <div className="App">
      <h1>|| Start Stop Watch ||</h1>
      <h1>{watch}</h1>
      <button className='start' disabled={started} onClick={startwatch}>Start</button>
      <button className='stop' onClick={stopwatch}>Stop</button>
      <button className='reset' onClick={resetwatch}>Reset</button>
    </div>
  );
}

export default App;
