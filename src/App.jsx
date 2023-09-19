import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.page";
import SuperHero from "./components/SuperHero.page";
import RqSuperHero from "./components/RqSuperHero.page";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/superhero">SuperHero</Link>
              </li>
              <li>
                <Link to="/rqsuperhero">RQ SuperHero</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/superhero" element={<SuperHero />} />
            <Route path="/rqsuperhero" element={<RqSuperHero />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;