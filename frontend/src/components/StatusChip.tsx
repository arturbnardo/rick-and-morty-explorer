import type { CharacterStatus } from "../types/character";

interface StatusChipProps {
  status: CharacterStatus;
  species: string;
}

function StatusChip({ status, species }: StatusChipProps) {
  const statusColor = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-gray-500",
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${statusColor[status]}`}></div>
      <span>
        {status} - {species}
      </span>
    </div>
  );
}

export default StatusChip;
