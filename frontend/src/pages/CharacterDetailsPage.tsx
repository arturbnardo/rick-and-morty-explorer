import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCharacterDetails } from "../hooks/useCharacterDetails";
import StatusChip from "../components/StatusChip";
function CharacterDetailsPage() {
  const { id } = useParams();
  const characterId = Number(id);

  const { loading, data, error } = useCharacterDetails({
    id: characterId,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (data === null) return <p>Character not found</p>;

  return (
    <div className="flex gap-8">
      <img src={data.image} alt={data.name} />
      <div className="flex flex-col">
        <h1>{data.name}</h1>
        <StatusChip status={data.status} species={data.species} />
        <p>Gender: {data.gender}</p>
        <p>Origin: {data.origin.name}</p>
        <p>Last known location: {data.location.name}</p>
        <p>Episodes: {data.episode.length}</p>

        <Link
          to="/"
          className="
          mt-auto
          px-6
          py-3
          rounded-xl
          bg-cyan-700
          font-bold
          text-white
          transition-colors duration-300
          hover:bg-cyan-900
          hover:cursor-pointer"
        >
          HomePage
        </Link>
      </div>
    </div>
  );
}

export default CharacterDetailsPage;
