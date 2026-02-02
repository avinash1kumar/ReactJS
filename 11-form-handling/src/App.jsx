import React, { useState } from "react";
import { usestate } from "react";

const App = () => {

  const [title, setTitle] = useState('')
 
  const submitHandler = (e) => {
    console.log(e)
    e.preventDefault()
    console.log("form submited by", title)

    setTitle('') // ye esliye likhe hai. jab use form submit kare toh input me koi value nhi rhe . input pura khali ho jaye.
  }

  return (
    <div className="m-10">
      <form onSubmit={ (e) => {
        submitHandler(e)
      }}>
        <input className="border h-8 mr-3 p-4" 
        type="text" 
        placeholder="Enter your name" 
        value={title} 
        onChange={(e) => {
          // console.log("writing..")
          // console.log(e.target.value)
          setTitle(e.target.value)
        }}
        />
        <button className="border-2 w-20 h-10">submit</button>
      </form>
    </div>
  )
}

export default App;