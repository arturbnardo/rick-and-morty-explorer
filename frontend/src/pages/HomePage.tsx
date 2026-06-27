import { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import CharacterSkeleton from "../components/CharacterSkeleton";
import { useCharacters } from "../hooks/useCharacters";
import type { CharacterFilterStatus } from "../types/filters";

const statusOptions = ["All", "Alive", "Dead", "unknown"] as const;

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

  const hasNoCharacters = characters?.results?.length === 0;

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    setPage((prev) => prev - 1);
  };

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <p className="md:text-3xl text-2xl text-white font-semibold">
          Something went wrong.
        </p>
        <p className="md:text-3xl text-2xl text-white font-semibold">
          Please try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-cyan-700 text-white text-lg font-bold rounded-xl hover:bg-cyan-900 transition-colors duration-200 hover:cursor-pointer"
        >
          Try again
        </button>
      </div>
    );

  return (
    <div>
      <div
        className="
        flex flex-col items-center gap-4 my-6
        md:flex-row md:justify-center
      "
      >
        <input
          className="
            bg-gray-800
            rounded-2xl
            px-4
            py-3
            w-72
            text-white
            outline-none
            border border-gray-700
            focus:border-cyan-500
            transition-all
          "
          type="text"
          value={inputValue}
          placeholder="Search character..."
          onChange={(e) => {
            setInputValue(e.target.value);
            setPage(1);
          }}
        />

        <div
          className="
            flex items-center gap-2
            bg-gray-900
            p-1
            rounded-2xl
            border border-gray-800
          "
        >
          {statusOptions.map((status) => {
            const isActive =
              (status === "All" && statusFilter === undefined) ||
              statusFilter === status;

            const activeStyles = {
              All: "bg-cyan-500 text-white",
              Alive: "bg-green-500 text-white",
              Dead: "bg-red-500 text-white",
              unknown: "bg-gray-500 text-white",
            };

            return (
              <button
                key={status}
                onClick={() => {
                  setPage(1);

                  setStatusFilter(
                    status === "All"
                      ? undefined
                      : (status as CharacterFilterStatus),
                  );
                }}
                className={`
                  px-4 py-2
                  rounded-xl
                  font-medium
                  cursor-pointer
                  transition-all duration-200

                  ${
                    isActive
                      ? activeStyles[status]
                      : "text-gray-300 hover:bg-gray-800"
                  }
                `}
              >
                {status}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-360 mx-auto px-8">
        <div className="grid grid-cols-1 gap-4 lg:gap-6 xl:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {!loadingCharacters &&
            characters?.results.map((character) => (
              <CharacterCard character={character} />
            ))}

          {!loadingCharacters && characters?.results?.length === 0 && (
            <div className="col-span-full text-center py-20">
              <p className="text-3xl text-white font-semibold">
                No characters found
              </p>
              <p className="text-gray-400 mt-2">
                Try searching for another character
              </p>
            </div>
          )}

          {loadingCharacters &&
            Array.from({ length: 20 }).map((_, idx) => (
              <CharacterSkeleton key={idx} />
            ))}
        </div>

        {!hasNoCharacters && (
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
              "
              >
                {"<"}
              </button>

              <div
                className="
                flex min-w-28 items-center justify-center
                rounded-lg border border-gray-700
                bg-gray-800 px-4 py-2
                text-sm font-semibold text-white
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
              "
              >
                {">"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
