const App = () => {
 
  const onMouseDown = () => {
    //  as soon as the button is pressed
    console.log("event is called");
    
  }

  function buttonClick() {
    // -  only after the button is pressed and released
    console.log("button is clicked");
  }
 
  function inputChange(q) {
    // console.log(q);
    
  }

  function onMouseMove(val) {
    // console.log(val)
  }
  
  const pageScrolling = (val) => {
    if(val > 0){
      console.log("sidha scrolling")
    }else {
      console.log("ulta scrolling")
    }
  }

  return (
    <div onWheel={ (e) => {
      // pageScrolling(e.deltaY)
      pageScrolling(e.deltaY)
    }}>

      
      {/* <h1>Hello, Name</h1> */}

      {/* <button onMouseDown={onMouseDown} onClick={buttonClick}>Change Name</button> */}

      { /* you can write function like this also */ }
      {/* <button onClick={() => {
        console.log("button is clicked");
        
      }}>Click Heare</button> */}

      {/* <input onChange={inputChange} type="text" placeholder="Enter Name" /> */}

      {/* <input onChange={function (event){
        inputChange(event.target.value)
        inputChange(event.nativeEvent.data)
        console.log(event)
      }} type="text" placeholder="Enter Name" /> */}


      {/* <div className="box" onMouseMove={ (e) => {
            onMouseMove(e.clientY)
      }}>

      </div> */}


      {/* -- SCROLLING CONCEPT ---- */}
      <div className="page1">page1</div>
      <div className="page2">page2</div>
      <div className="page3">page3</div>


    </div>
  )
}

export default App