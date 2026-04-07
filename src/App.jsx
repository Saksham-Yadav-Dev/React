import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

import Login,{Profile,Setting,a} from './UserComponent'
import Exercise from './ExerciseForJSX';
import Basic from './Basic';

function App(){
  const userName="Saksham yadav";
  return(
    <>
    {/* <Login/>
    <Profile/>
    <Setting/>
    <h1>{a}</h1> */}

    {/* JSX */}
    <h1>{userName}</h1>

    <Exercise/>
    <Basic/>
    

    
    </>
  )
}

export default App
