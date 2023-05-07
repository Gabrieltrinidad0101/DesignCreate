import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Authentication from './screens/authentication/infranstructure/Authentication'
import Home from './screens/home/insfranstructure/Home'
import Cards from './screens/home/insfranstructure/components/cards/Cards'
import Editor from './screens/editor/infranstructure/Editor'
import './App.css'
import { AuthenticationProvider } from './share/infranstruture/AuthenticationContext'
import { designApp } from './screens/home/insfranstructure/dependencies'

export default function App (): JSX.Element {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Authentication isRegister={true} />}></Route>
            <Route path="/login" element={<Authentication isRegister={false} />}></Route>
            <Route element={<AuthenticationProvider />} >
                <Route element={<Home/>}>
                  <Route path="/home" element={<Cards typeSearch='home' designApp={designApp} />}></Route>
                  <Route path="/explore" element={<Cards typeSearch='explore' designApp={designApp} />}></Route>
                  <Route path="/likes" element={<Cards typeSearch='likes' designApp={designApp} />}></Route>
                </Route>
                <Route path="/Editor" element={<Editor />}></Route>
            </Route>
          </Routes>
          <ToastContainer />
        </BrowserRouter>
  )
}
