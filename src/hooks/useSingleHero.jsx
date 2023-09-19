import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};
export default function useSingleHero(heroId) {
  return useQuery(["hero", heroId], () => fetchSuperHero(heroId));
}
