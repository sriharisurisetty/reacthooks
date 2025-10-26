import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";

function App() {
  return (
  
      <Routes>
        <Route path="/" element={Home()} />
        <Route path="/about" element={About()} />
      </Routes>

  )
}

 export default App