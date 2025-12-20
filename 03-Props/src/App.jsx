import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
        <Card user="Avi" age={18} img="https://plus.unsplash.com/premium_photo-1764459931016-f25b574a7da9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        
        <Card user="Avinash" age={20} img="https://plus.unsplash.com/premium_photo-1694261122813-9d2a0a6770e0?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <Card user="Raju" age={22} img="https://plus.unsplash.com/premium_photo-1694740334015-c22db0e088ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  )
}

export default App