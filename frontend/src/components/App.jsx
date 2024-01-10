import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Dash from "./Dash";
import { gni, gdp } from "./chartData";
import Nav from "./Nav";

function App() {
  const api = "https://global-trends-backend-ee66f588b90d.herokuapp.com/";
  useEffect(() => {
    if (!window.localStorage.getItem("dataSet")) {
      const getData = async () => {
        const response = await fetch(api);
        const jsonRes = await response.json();
        console.log(jsonRes);
        window.localStorage.setItem("dataSet", JSON.stringify(jsonRes));
      };
      getData();
    }
  }, []);

  return (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dash />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
