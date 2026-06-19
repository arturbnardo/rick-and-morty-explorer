import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Character } from "../types/character";

type FavoritesContextType = {
  favorites: Character[];
  addToFavorites: (character: Character) => void;
  removeFromFavorites: (characterId: number) => void;
  isFavorite: (characterId: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      "useFavoritesContext must be used inside the FavoritesProvider",
    );
  }
  return context;
};

type FavoritesProviderProps = {
  children: ReactNode;
};

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Character[]>(() => {
    const storedFavs = localStorage.getItem("favorites");

    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (character: Character) => {
    const alreadyExists = favorites.some((fav) => fav.id === character.id);
    if (!alreadyExists) {
      setFavorites((prev) => [...prev, character]);
    }
  };

  const removeFromFavorites = (characterId: number) => {
    setFavorites((prev) =>
      prev.filter((character) => character.id !== characterId),
    );
  };

  const isFavorite = (characterId: number) => {
    return favorites.some((character) => character.id === characterId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
