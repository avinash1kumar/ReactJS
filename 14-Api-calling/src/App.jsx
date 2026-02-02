import React from "react";
import axios from 'axios';
import { useState } from "react";

const App = () => {

  // ? method to get data from API
  // 1. Fetch 
  // 2. axios {npm i axios (run in terminal)}

  // async function getData() {
  //   // console.log("data come")

  //   // await - means wait karo jab tak , tab tak data sahi se aa n jaye. jab await lagaye ho toh async lagana jaruri hai nhi toh error mare ga 
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   console.log(response)
  // }

  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')

    // ? we are using await here because data is also come as promise pending .
    // * .json means data will come in json formate that you can use for your use
    const data = await response.json()

    console.log(data);
    console.log(data[19].id);

  }


  // ? using axios
  /*  
    console.log(data[19].id);
  1. install by running command in terminal {npm i axios} for every project not globally in vs code . so first you need to enter in the project that you are working on.
  
  2. clear then run npm run dev to run the project

  3. import axios in app.jsx {import axios from axios}
  */

  const getData1 = async () => {

    // * method 1
    // const data = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    // ! no need to write json to get data from api as user accessable
    // console.log(data.data) // give data of API

    // * method 2
    // destructring of method 1
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

    console.log(data) // it will give you direct data of API because you use data as object/ store data in obj.

  }


  const [image, setImage] = useState([])

  // lorem picsum api calling
  const getImage = async () => {

    const images = await axios.get('https://picsum.photos/v2/list')

    // console.log(images.data)
    setImage(images.data)
  }


  return(
    <div>
      <h2>How to show data from API on frontend</h2>
      <button onClick={getData}>Get Data</button>
      <button onClick={getData1}>Axios Api</button>
      <button onClick={getImage}>Get Images</button>
      <div>
        {image.map(function(elem,idx){
          return <h3>Hello {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App;