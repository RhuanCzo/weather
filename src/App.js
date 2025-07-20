import PaginaInicial from "./PaginaInicial";
import Clima from "./Clima";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [cidade, setCidade] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial setCidade={setCidade} cidade={cidade} />} />
        <Route path="/clima" element={<Clima />} cidade={cidade} />
      </Routes>
    </BrowserRouter>
  );
}