import React from "react";

const App = () => {
  
  // ? these are local storage functionality
  // localStorage.clear()
  // localStorage.setItem('user','avinash')
  // localStorage.setItem('age','20')
  // const user = localStorage.getItem('user')
  // localStorage.removeItem('age')
  // console.log(user)


  // const user = {
  //   username: 'avinash',
  //   age: 20,
  //   city: 'delhi',
  //   mobileNo: 402302349
  // }

  // localStorage.setItem('userDetails', user) // * here user will stored as object but in local storage we have to store value as string. so we convert object into string bu using ( JSON.stringify(pass the variable that we want to store) )
  
  // ! this is the best way to store object in local storage.
  // localStorage.setItem('userDetails', JSON.stringify(user)) 

  // ! JSON.parse() convert string into object.
  // ? when you want to access data from local storage u have to use JSON.parse(localStorage.getItem('key')) because in local storage data is save as string. so u can't access the value of string.

  const userDetails = JSON.parse(localStorage.getItem('userDetails'))
  console.log(userDetails)
  
  console.log(userDetails.username)
  console.log(userDetails.city)


  const objArr = [
    {
      username: 'avinash',
      age: 20,
      city: 'delhi',
      mobileNo: 402302349
    },
    {
      username: 'avi',
      age: 20,
      city: 'noida',
      mobileNo: 402302349
    },
    {
      username: 'kumar',
      age: 34,
      city: 'mumbai',
      mobileNo: 407802349
    },
    {
      username: 'avinash',
      age: 25,
      city: 'bombay',
      mobileNo: 756482349
    },
  ]

  // console.log(objArr[1].username)

  localStorage.setItem('objArr', JSON.stringify(objArr))

  const objArrDetails = JSON.parse(localStorage.getItem('objArr'))
  console.log(objArrDetails)
  console.log(objArrDetails[3].city)

  

  return(
    <div>App</div>
  )
}

export default App;