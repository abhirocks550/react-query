import { Link } from "react-router-dom";

export default function NavBar() {
  return (
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
        <li>
          <Link to="/parallel">Parallel Queries</Link>
        </li>
      </ul>
    </nav>
  );
}
