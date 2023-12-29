import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState, useEffect } from 'react'
import Dash from "./Dash"
import { gni, gdp } from "./chartData"

function App() {
  const api = 'http://127.0.0.1:5000/'
  useEffect(() => {
    if (!window.localStorage.getItem('dataSet')) {
      const getData = async() => {
        const response = await fetch(api);
        const jsonRes = await response.json();
        console.log(jsonRes)
        window.localStorage.setItem('dataSet', JSON.stringify(jsonRes))
    }
    getData()
    }
  },[])

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Dash />}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
