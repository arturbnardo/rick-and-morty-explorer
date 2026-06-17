import type { CharacterStatus } from "../types/character";

interface StatusChipProps {
  status: CharacterStatus;
  species: string;
}
const statusColor = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknown: "bg-gray-500",
};

function StatusChip({ status, species }: StatusChipProps) {
  return (
    <div className="flex items-center gap-2 text-white mt-2">
      <div className={`w-2 h-2 rounded-full ${statusColor[status]}`}></div>
      <span>
        {status} - {species}
      </span>
    </div>
  );
}

export default StatusChip;
