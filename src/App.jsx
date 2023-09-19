import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";
import Home from "./components/Home.page";
import SuperHero from "./components/SuperHero.page";
import RqSuperHero from "./components/RqSuperHero.page";
import SingleHero from "./components/RQSingleHero.page";
import ParallelQueries from "./components/ParallelQueries.page";
import NavBar from "./components/NavBar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/superhero" element={<SuperHero />} />
              <Route path="/heroes/:id" element={<SingleHero />} />
              <Route path="/rqsuperhero" element={<RqSuperHero />} />
              <Route path="/parallel" element={<ParallelQueries />} />
            </Routes>
          </div>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
