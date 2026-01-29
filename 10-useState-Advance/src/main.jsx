import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Destructure from './Destructring.jsx'
import BatchUpdate from './BatchUpdate.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Destructure />
    <BatchUpdate />
  </StrictMode>,
)
