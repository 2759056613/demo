import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './通信数据类型限定.jsx'
//import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
