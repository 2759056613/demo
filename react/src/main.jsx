import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './useEffect.jsx'
//import './index.css'

createRoot(document.getElementById('root')).render(
  //recat提供的严格模式组件
  //<StrictMode>
  <App />
  //  </StrictMode>
)
