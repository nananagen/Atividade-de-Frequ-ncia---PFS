import React from "react";
import Pagina1 from "./Pagina1";
import Pagina2 from "./Pagina2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Pagina1 />}></Route>
          <Route path="pagina1" element={<Pagina1 />}></Route>
          <Route path="pagina2" element={<Pagina2 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
