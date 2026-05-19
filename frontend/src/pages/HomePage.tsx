import { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import CharacterSkeleton from "../components/CharacterSkeleton";
import { useCharacters } from "../hooks/useCharacters";
import type { CharacterFilterStatus } from "../types/filters";

function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);

  const [statusFilter, setStatusFilter] = useState<
    CharacterFilterStatus | undefined
  >(undefined);
  const {
    loading: loadingCharacters,
    data: characters,
    error,
  } = useCharacters({
    page,
    name: inputValue,
    status: statusFilter,
  });

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setPage((prev) => prev - 1);
  };

  if (error) return <p>{error}</p>;

  return (
    <div>
      <div
        className="
       flex
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
          cursor-pointer
          bg-cyan-700
          rounded
          text-white
          text-center
          font-bold"
          value={statusFilter}
          onChange={(e) => {
            const value = e.target.value;
            setStatusFilter(
              value === "All" ? undefined : (value as CharacterFilterStatus),
            );
          }}
        >
          <option>All</option>
          <option>Alive</option>
          <option>Dead</option>
          <option>unknown</option>
        </select>
      </div>

      <div className="max-w-360 mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {!loadingCharacters &&
            characters?.results.map((character) => (
              <CharacterCard
                name={character.name}
                image={character.image}
                status={character.status}
                species={character.species}
                id={character.id}
                key={character.id}
              />
            ))}
          {loadingCharacters &&
            Array.from({ length: 20 }).map((_, idx) => (
              <CharacterSkeleton key={idx} />
            ))}
        </div>

        <div className="mt-10 mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-white">
              {characters?.info.count ?? 0}
            </span>{" "}
            characters found
          </p>

          <div className="flex items-center gap-3">
            <button
              disabled={page === 1 || loadingCharacters}
              onClick={handlePreviousPage}
              className="
              cursor-pointer      
              flex h-10 w-10 items-center justify-center
              rounded-lg border border-cyan-800
              bg-gray-800 text-lg font-bold text-cyan-400
              transition-all duration-200
              hover:bg-cyan-700 hover:text-white
              disabled:cursor-not-allowed disabled:border-gray-700
              disabled:bg-gray-900 disabled:text-gray-600
              disabled:hover:bg-gray-900 disabled:hover:text-gray-600
            "
              aria-label="Previous page"
            >
              {"<"}
            </button>

            <div
              className="
              flex min-w-28 items-center justify-center
              rounded-lg border border-gray-700
              bg-gray-800 px-4 py-2
              text-sm font-semibold text-white
              shadow-md
      "
            >
              Page {page}
              <span className="ml-1 text-gray-400">
                / {characters?.info.pages ?? 1}
              </span>
            </div>

            <button
              disabled={page === characters?.info.pages || loadingCharacters}
              onClick={handleNextPage}
              className="
              cursor-pointer  
              flex h-10 w-10 items-center justify-center
              rounded-lg border border-cyan-800
              bg-gray-800 text-lg font-bold text-cyan-400
              transition-all duration-200
              hover:bg-cyan-700 hover:text-white
              disabled:cursor-not-allowed disabled:border-gray-700
              disabled:bg-gray-900 disabled:text-gray-600
              disabled:hover:bg-gray-900 disabled:hover:text-gray-600
      "
              aria-label="Next page"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
