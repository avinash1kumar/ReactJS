import { useState } from "react"

const App = () => {

  // const [num, setNum] = useState(10)
  // useState ke andar jo value rakhte hai wo num ka value hota hai
  // const [name, setName] = useState("Avi")

  // const changeNum = () => {
  //   setNum(20)
  //   setName('Avinash')
  // }

  // const box = document.querySelector('.counter-box')

  // let num;

  const [num, setNum] = useState(0)
  const [message, setMessage] = useState("")
  const increase = () => {
    // setNum(num++)
    setNum(num+1)
  }
  const decrease = () => {
    // setNum(num++)
    setNum(num-1)
  }
  const evenNumber = () => {
    // setNum(num++)
    if(num >= 0 & num % 2 == 0){
      setNum(num+2)
    }else if(num < 0) {
      setMessage('-ve no is not even')
      // setNum("-ve no is not even")
    }
  }

  const oddNumber = () => {
    // setNum(num++)
    if(num >= 0 & num % 2 != 0){
      setNum(num+2)
    }else if(num < 0) {
      setMessage('-ve no is not odd')
      // setNum("-ve no is not even")
    }
  }

  const reset = () => {
    setMessage("")
    setNum(0)
  }

  return (
    <div className="parent">
      {/* <h1>Value of num is {num} </h1>
      <h2>Name is {name}</h2>
      <button onClick={changeNum}>click</button> */}

      {/* --------- COUNTER ------------- */}
      <div className="counter-box">{message ? message : `Count ${num}`}
      </div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={evenNumber}>Even Number</button>
      <button onClick={oddNumber}>Odd Number</button>
      <button onClick={reset}>Reset</button>

    </div>
  )
}

export default App