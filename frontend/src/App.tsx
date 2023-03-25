import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Authentication from './screens/authentication/infranstruture/Authentication'

export default function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Authentication/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
