import { useParams } from "react-router-dom";
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
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex overflow-hidden bg-gray-800 rounded-2xl border border-cyan-800">
        <img src={data.image} alt={data.name} className="w-80 object-cover" />

        <div className="flex flex-col justify-center text-white font-bold p-6 gap-6">
          <h1 className="text-4xl font-bold pl-4">{data.name}</h1>

          <div className="flex flex-col gap-2">
            <StatusChip status={data.status} species={data.species} />

            <div className="pl-4 flex flex-col gap-2">
              <p>Gender: {data.gender}</p>
              <p>Origin: {data.origin.name}</p>
              <p>Last known location: {data.location.name}</p>
              <p>Episodes: {data.episode.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetailsPage;
