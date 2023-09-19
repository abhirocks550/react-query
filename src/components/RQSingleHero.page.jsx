import { useParams } from "react-router-dom";
import useSingleHero from "../hooks/useSingleHero";

function SingleHero() {
  const { id } = useParams();

  const { isLoading, data, isError, error } = useSingleHero(id);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  );
}

export default SingleHero;
