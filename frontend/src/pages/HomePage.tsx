import CharacterCard from "../components/CharacterCard";
import { useCharacters } from "../hooks/useCharacters";

function HomePage() {
  const { loading, data, error } = useCharacters();

  if (loading) return <p>loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {data
        ? data.results.map((character) => (
            <CharacterCard
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              id={character.id}
              key={character.id}
            />
          ))
        : null}
    </div>
  );
}

export default HomePage;
