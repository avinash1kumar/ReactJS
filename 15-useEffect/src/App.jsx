import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {

  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)

  // useEffect(function(){
  //   console.log('use effect is running...')
  //   // mounting in useEffect
  //   // we pass depedencies in useEffect in array
  // }, [num])

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  function aChanging() {
    console.log('A value is change ho gayi hai');
  }

  function bChanging() {
    console.log('B value is changed');
  }

  useEffect(function(){
    console.log('useeffect is running...')
  }, [b,a]) // yaha [] jo likha rahe ga uske respect me useeffect chale ga
  
  return (
    <div>
      <h1>UseEffect</h1>
      {/* <h1>{num}</h1>
      <h1>{num2}</h1>
      <button 
        onMouseEnter={() => {
          setNum(num+1)
        }}
        onDoubleClick={() => {
          setNum2(num2+10)
        }}
      >click</button> */}

      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      
      <button 
      onClick={() => {
        setA(a+1)
      }}>
        changeA
      </button>

      <hr />
      <button
      onClick={()=>{
        setB(b-1)
      }}>
        changeB
      </button>
    </div>
  )
}

export default App