import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-router-dom'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from '../Pages/Admin/Admin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
