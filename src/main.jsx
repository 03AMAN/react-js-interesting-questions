import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Login from '../Digital-Clock-Color-Picker/src/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Login />
  </StrictMode>,
)
