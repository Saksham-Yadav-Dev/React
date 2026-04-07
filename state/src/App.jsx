import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(){
  const [response,stateResponse]=useState(10);

  function counter(){
    stateResponse(response-1)
  }
  return(
    <>
    <p>{response}</p>
    <button onClick={counter}>-</button>
    </>
  )
}

export default App
