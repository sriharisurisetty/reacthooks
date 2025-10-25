import { useState,useEffect } from 'react'
import ThemeContext from './ThemeContext';


import Header from "./Header";

function App() {
  const themedark = "dark"; // global theme
  const [count,setCount]=useState(0)
  const [theme,setTheme]=useState('blue')

  return (
  <ThemeContext.Provider value={themedark}>
    <Header/>
    </ThemeContext.Provider>
  );
  
  
  
  function increment(){
    setCount((prevCount)=>prevCount + 1)
    setTheme('green')
    
  }
  
  function decrement(){
    setCount((prevCount)=>prevCount - 1)
    setTheme('red')
    if(count<1){
      setCount(0)
      setTheme('')
    }
  }
useEffect(()=>{
  console.log('Component mounted');
  setTimeout(() => {
    setCount(10)
  }, 1000);
  return()=>{
    clearTimeout()
    console.log('Component unmounted'); // cleanup function for the use effect
  }
},[count]) // when the count changes the use effect will run and render the component again

  return(
      <>
  <button onClick={decrement}>-</button>
  <span>{count}</span>
  <span>{theme}</span>
  <button onClick={increment}>+</button>
  </>
  )
}
export default App
