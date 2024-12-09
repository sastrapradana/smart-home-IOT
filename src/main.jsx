import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Gerbang from "./pages/gerbang.jsx";
import Lampu from "./pages/lampu.jsx";
import Kipas from "./pages/kipas.jsx";
import Pintu from "./pages/pintu.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/gerbang" element={<Gerbang />} />
        <Route path="/lampu" element={<Lampu />} />
        <Route path="/kipas" element={<Kipas />} />
        <Route path="/pintu" element={<Pintu />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
