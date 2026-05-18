import { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useCharacters } from "../hooks/useCharacters";
import { useDebounce } from "../hooks/useDebounce";
import type { CharacterFilterStatus } from "../types/filters";

function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<CharacterFilterStatus | undefined>(
    undefined,
  );
  const debouncedValue = useDebounce(inputValue);
  const { loading, data, error } = useCharacters(debouncedValue, status);

  if (error) return <p>{error}</p>;

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
  };

  const charactersLimit = inputValue
    ? data?.results
    : data?.results.slice(0, 6);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex
       justify-center
       gap-2 my-6 h-12
       "
      >
        <input
          className="
          bg-gray-800
          rounded
          p-2
          w-64
          text-white"
          type="text"
          value={inputValue}
          placeholder="Search character..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select
          className="
          bg-cyan-700
          rounded
          text-white
          text-center
          font-bold"
          value={status}
          onChange={(e) => {
            const value = e.target.value;
            setStatus(
              value === "All" ? undefined : (value as CharacterFilterStatus),
            );
          }}
        >
          <option>All</option>
          <option>Alive</option>
          <option>Dead</option>
          <option>unknown</option>
        </select>
      </form>

      {loading && (
        <div className="flex justify-center items-center min-h-screen text-5xl text-white">
          <p>loading...</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {charactersLimit?.map((character) => (
          <CharacterCard
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
            id={character.id}
            key={character.id}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
