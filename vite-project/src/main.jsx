import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './LoginPage.jsx'
import './index.css'
import { Route,  BrowserRouter, Routes} from 'react-router-dom'
import Join from './JoinPage.jsx'
import Main from './mainPage.jsx'
import LoginMain from './LoginMainPage.jsx'

createRoot(document.getElementById('root')).render( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Join' element={<Join/>}></Route>
        <Route path='/LoginMain' element={<LoginMain/>}></Route>
      </Routes>
    </BrowserRouter>
)
