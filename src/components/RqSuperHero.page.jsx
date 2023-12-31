import { Link } from "react-router-dom";
import useSuperHeroesData from "../hooks/useSuperHeroesData";

function RQSuperHero() {
  const onSuccess = () => {
    console.log("Performs side effects after fetching");
  };

  const onError = () => {
    console.log("Performs actions on Error");
  };

  const { isLoading, data, isError, error } = useSuperHeroesData(
    onSuccess,
    onError
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      {data.data.map((hero) => {
        return (
          <div key={hero.name}>
            <Link to={`/heroes/${hero.id}`}>{hero.name} </Link>
          </div>
        );
      })}
    </>
  );
}

export default RQSuperHero;
