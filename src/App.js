import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import Create from "./pages/Create/Create";
import Search from "./pages/Search/Search";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
