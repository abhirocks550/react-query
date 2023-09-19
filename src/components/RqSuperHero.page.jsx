import axios from "axios";
import { useQuery } from "react-query";

function RQSuperHero() {
  const onSuccess = () => {
    console.log("Performs side effects after fetching");
  };

  const onError = () => {
    console.log("Performs actions on Error");
  };

  const { isLoading, data, isError, error } = useQuery(
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
    }
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data?.data?.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
}

export default RQSuperHero;
