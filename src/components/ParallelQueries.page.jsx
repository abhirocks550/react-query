import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};
function ParallelQueries() {
  const { data: heroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return (
    <>
      <h2>Parallel Queries</h2>
      <h3>Friends: {friends.data.length}</h3>
      <h3>Heroes: {heroes.data.length}</h3>
    </>
  );
}

export default ParallelQueries;
