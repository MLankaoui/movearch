import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Hero from "./components/Hero/Hero";
import Movies from "./components/movies/Movies";
import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true);

    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false); // Hide the spinner after 7 seconds
        }, 2000);

        // Cleanup timeout if the component unmounts
        return () => clearTimeout(timeout);
    }, []);
  return (
    <>
      {loading ? (
                <div id="spinner" className="container">
                    <div className="loading"></div>
                </div>
            ) :(

      <Router>
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
      )}
    </>
  )
}

export default App
