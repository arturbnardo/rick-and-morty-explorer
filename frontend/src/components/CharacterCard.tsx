import type { CharacterStatus } from "../types/character";
import StatusChip from "./StatusChip";

interface CharacterCardProps {
  name: string;
  image: string;
  status: CharacterStatus;
  species: string;
}

function CharacterCard({ name, image, status, species }: CharacterCardProps) {
  return (
    <div
      className="
    flex 
    max-w-140 h-52 
    bg-sky-950 
    border-2 
    border-cyan-700 
    rounded shadow-lg"
    >
      <img src={image} alt={name} className="h-full object-cover" />

      <div className="flex flex-col p-4">
        <h2 className="text-white text-2xl">{name}</h2>

        <StatusChip status={status} species={species} />
      </div>
    </div>
  );
}

export default CharacterCard;
