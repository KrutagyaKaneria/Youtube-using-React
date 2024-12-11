import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bigsec from './Components/Sidebar/Bigsec.jsx'
// import Bigsec1 from './Components/Navbar/Bigsec1.jsx'
import Bigsec1 from './Components/Navbar/Bigsec1.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <div className='big'>
  <Bigsec />
  <Bigsec1 />
  </div>
  </StrictMode>,
)
  