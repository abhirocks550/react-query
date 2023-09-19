import axios from "axios";
import { useQuery } from "react-query";

export default function useSuperHeroesData(onSuccess, onError) {
  return useQuery(
    "super-heroes",
    () => {
      return axios.get("http://localhost:4000/superheroes");
    },
    {
      // staleTime: 300000, // Data will not be fetched before 5 minutes
      // refetchInterval: 2000, // Polling. fetch every 2 seconds
      // enabled: false, // it will not run on initial Load
      onSuccess,
      onError,
      select: (data) => {
        const updatedData = data.data.map((hero) => hero.name);
        return updatedData;
      },
    }
  );
}
