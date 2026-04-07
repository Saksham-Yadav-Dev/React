import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Task
// Create a React component that:
// Displays a number on the screen (initial value = 0)
// Provides two buttons:
// Increment (+)
// Decrement (−)
// Conditions

// The counter must not go below 0
// The counter must not exceed 10

// function App(){
//   const[counter,setCounter]=useState(0);
//   function increase(){
//     if(counter<10){
//       setCounter(counter+1);
//     }
//     else{
//       return;
//     }
//   }
//   function decrease(){
//     if(counter>0){
//       setCounter(counter-1);
//     }
//     else{
//       return;
//     }
//   }
//   return(
//     <>
//     <h2>{counter}</h2>
//     <button onClick={increase}>+</button>
//     <button onClick={decrease}>-</button>
//     </>
//   )
// }

// Create a React component with a button.
// Requirements
// Use state to track button status.
// When button is clicked → it should get disabled.
// Button should not be clickable again.

// function App(){
//   const[check,setCheck]=useState("enbled");
//   function checkStatus(){
//     setCheck("disabled");
//   }
//   return(
//     <>
//     <button onClick={checkStatus}>click</button>
//     </>
//   )
// }

// Create a React component with a dropdown (select).
// Requirements
// Add options (HTML, CSS, JavaScript, React) using state variable array.
// Store selected value using state
// Display selected value below
// Example
// You selected: React

// function App(){
//   const[fun,setFun]=useState("");
//   function drop(e){
//     setFun(e.target.value);
//   }
//     return(
//     <>
//     <h1>Select Technology: </h1>
//     <select onChange={drop} val={fun}>
//       <option value="">...select...</option>
//       <option>CSS</option>
//       <option>HTML</option>
//       <option>Java Script</option>
//       <option>React</option>
//     </select>
//     <h1>You Selected: {fun}</h1>
//     </>
//   )
// }


// Create a React component with a button.
// Requirements:
// Use state to store background color
// On button click → change background to a random color
// Apply color to the page (or a div)

// function App(){
//   const [color,setColor]=useState("blue");
//   function change(){
//     if(color=="green"){
//     setColor("blue");
//     }
//     else{
//       setColor("green");
//     }
//   }
//   return(
//     <>
//     <div style={{
//       height:"100px",
//       width:"100px" ,
//       background:color}}>
//     <button onClick={change}>Change BackGround</button>
//     </div>
//     </>
//   )
// }

// // Requirements
// Input type: password
// Button: Show / Hide
// Clicking button toggles visibility


// function App(){
//     const[type,settype]=useState("password");
//     function toggle(){
//         if(type==="text"){
//             settype("password");
//         }
//         else{
//             settype("text");
//         }
//     }
//     return(
//         <>
//         <input type={type} />
//         <button onClick={toggle}>{type==="password"? "Show": "Hide"}</button>
        
//         </>
//     )
// }
export default App
