import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Authentication from './screens/authentication/infranstructure/Authentication'
import Home from './screens/home/insfranstructure/Home'
import './App.css'
import { AuthenticationProvider } from './share/infranstruture/AuthenticationContext'
export default function App (): JSX.Element {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Authentication isRegister={true} />}></Route>
            <Route path="/login" element={<Authentication isRegister={false} />}></Route>
            <Route element={<AuthenticationProvider />} >
                <Route path="/home" element={<Home />}></Route>
            </Route>
          </Routes>
          <ToastContainer />
        </BrowserRouter>
  )
}
