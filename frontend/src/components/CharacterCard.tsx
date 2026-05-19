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
    flex
    w-full
    mx-auto
    max-w-140 h-52 
    bg-gray-800 
    border-2 
    border-cyan-800 
    rounded shadow-lg"
    >
      <img src={image} alt={name} className="h-full object-cover" />

      <div className="flex flex-col p-4 w-full h-full">
        <h2 className="text-white font-bold text-2xl">{name}</h2>

        <StatusChip status={status} species={species} />
        <div className="flex mt-auto justify-end">
          <button
            onClick={handleViewDetails}
            className="w-32 h-12
           bg-cyan-700 text-white text-base font-bold 
           rounded 
           hover:cursor-pointer
           hover:bg-cyan-900
           transition-colors duration-300"
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
