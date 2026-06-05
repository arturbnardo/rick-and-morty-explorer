import { useParams } from "react-router-dom";
import { useCharacterDetails } from "../hooks/useCharacterDetails";
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
    <div>
      <div>This is the CharacterDetailsPage</div>
    </div>
  );
}

export default CharacterDetailsPage;
