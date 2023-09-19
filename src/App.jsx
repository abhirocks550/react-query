import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";
import Home from "./components/Home.page";
import SuperHero from "./components/SuperHero.page";
import RqSuperHero from "./components/RqSuperHero.page";
import SingleHero from "./components/RQSingleHero.page";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
              <Route path="/heroes/:id" element={<SingleHero />} />
              <Route path="/rqsuperhero" element={<RqSuperHero />} />
            </Routes>
          </div>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
