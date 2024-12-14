import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Hero from "./components/Hero/Hero";
import Movies from "./components/movies/Movies";

function App() {

  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
