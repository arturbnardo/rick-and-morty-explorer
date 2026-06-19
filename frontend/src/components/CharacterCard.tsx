import type { Character } from "../types/character";
import { useNavigate } from "react-router-dom";
import StatusChip from "./StatusChip";
import FavoriteButton from "./FavoriteButton";

interface CharacterCardProps {
  character: Character;
}

function CharacterCard({ character }: CharacterCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div
      className="
    flex flex-col
    sm:flex-row

    w-full
    max-w-sm
    sm:max-w-140

    mx-auto

    overflow-hidden

    rounded-2xl
    border border-cyan-800

    bg-gray-800
    shadow-lg
  "
    >
      <img
        src={character.image}
        alt={character.name}
        className="
      h-60
      w-full
      object-cover

      sm:h-auto
      sm:w-44
    "
      />

      <div className="flex flex-1 flex-col p-4">
        <div className="flex justify-between gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            {character.name}
          </h2>
          <FavoriteButton character={character} />
        </div>

        <StatusChip status={character.status} species={character.species} />

        <div className="mt-auto flex justify-end">
          <button
            onClick={handleViewDetails}
            className="
          h-12
          w-full
          sm:w-32
          mt-4

          rounded-xl

          bg-cyan-700
          text-base
          font-bold
          text-white

          transition-colors duration-300
          hover:bg-cyan-900
          hover:cursor-pointer
        "
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
