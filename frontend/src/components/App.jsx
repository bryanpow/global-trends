import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Dash from "./Dash";
import { gni, gdp } from "./chartData";
import Nav from "./Nav";
import BarLoader from 'react-spinners/BarLoader'
function App() {
  const [loading, setLoading] = useState(false)
    const api = "https://global-trends-backend-ee66f588b90d.herokuapp.com/";
  useEffect(() => {
    if (!window.localStorage.getItem("dataSet")) {
      const getData = async () => {
        const response = await fetch(api);
        const jsonRes = await response.json();
        console.log(jsonRes);
        window.localStorage.setItem("dataSet", JSON.stringify(jsonRes));
     
          setLoading(true)
          location.reload()
      };
      getData();
      
    }
  }, []);
 
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={!loading && <Dash />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
 
}

export default App;