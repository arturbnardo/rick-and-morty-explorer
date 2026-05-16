import CharacterCard from "../components/CharacterCard";

function HomePage() {
  return (
    <div>
      <CharacterCard
        name="Nome"
        image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        status="Alive"
        species="Human"
      />
    </div>
  );
}

export default HomePage;
