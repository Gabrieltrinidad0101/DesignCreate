import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Authentication from './screens/authentication/infranstruture/Authentication'

export default function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Authentication/>}></Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}
