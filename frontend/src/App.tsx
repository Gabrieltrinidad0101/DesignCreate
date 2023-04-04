import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Authentication from './screens/authentication/infranstructure/Authentication'
import Home from './screens/home/insfranstructure/Home'
import './App.css'
export default function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Authentication/>}></Route>
        <Route path="/login" element={<Authentication/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}
