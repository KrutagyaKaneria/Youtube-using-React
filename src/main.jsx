import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sec1 from './Components/Sidebar/Sec1.jsx'
import Sec3 from './Components/Sidebar/Sec3.jsx'
import Sec4 from './Components/Sidebar/Sec4.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Sec1 />
  <Sec3 />
  <Sec4 />
  </StrictMode>,
)
