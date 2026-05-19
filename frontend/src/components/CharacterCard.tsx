import type { CharacterStatus } from "../types/character";
import { useNavigate } from "react-router-dom";
import StatusChip from "./StatusChip";

interface CharacterCardProps {
  name: string;
  image: string;
  status: CharacterStatus;
  species: string;
  id: number;
}

function CharacterCard({
  name,
  image,
  status,
  species,
  id,
}: CharacterCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/character/${id}`);
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
        src={image}
        alt={name}
        className="
      h-60
      w-full
      object-cover

      sm:h-auto
      sm:w-44
    "
      />

      <div className="flex flex-1 flex-col p-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white">{name}</h2>

        <StatusChip status={status} species={species} />

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
