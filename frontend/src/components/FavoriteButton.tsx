import { Star } from "lucide-react";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import type { Character } from "../types/character";

interface FavoriteButtonProps {
  character: Character;
}

function FavoriteButton({ character }: FavoriteButtonProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useFavoritesContext();

  const favorited = isFavorite(character.id);

  const handleToggleFavorite = () => {
    if (favorited) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character);
    }
  };

  return (
    <div>
      <button
        className="hover:cursor-pointer shrink-0"
        onClick={() => handleToggleFavorite()}
      >
        <Star
          size={24}
          stroke="#06b6d4"
          fill={favorited ? "#facc15" : "none"}
        />
      </button>
    </div>
  );
}

export default FavoriteButton;
