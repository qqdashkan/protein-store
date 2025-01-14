import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
