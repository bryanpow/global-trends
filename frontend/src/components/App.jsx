import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState, useEffect } from 'react'
import '/src/App.css'

function App() {
  const api = 'http://127.0.0.1:5000/'
  useEffect(() => {
    const getData = async() => {
      const response = await fetch(api);
      const jsonRes = await response.json();
      console.log(jsonRes)
    }
    getData()
  },[])

  return (
    <>
     {/* <BrowserRouter>
     <Routes>
      <Route path='/' element={}></Route>
     </Routes>
     </BrowserRouter> */}
    </>
  )
}

export default App
