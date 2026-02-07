import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const App = () => {

  return(
    <div>

      <Navbar />
      <h3>This is navbar</h3>
      <Routes>
        {/* 
        routes are containers which contains all routes
        React router dom helps to built spa (single page application - page reload nhi hota)
        */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactpage' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App