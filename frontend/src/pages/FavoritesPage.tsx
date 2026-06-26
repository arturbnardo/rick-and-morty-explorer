import { Link } from "react-router-dom";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import CharacterCard from "../components/CharacterCard";

function FavoritesPage() {
  const { favorites } = useFavoritesContext();

  if (favorites.length === 0)
    return (
      <div className="text-center my-20 flex flex-col gap-4">
        <p className="text-3xl text-white font-semibold">
          Your favorites list is empty.
        </p>
        <p className="text-gray-400">Start exploring!</p>
        <Link
          to="/"
          className="text-cyan-400 hover:text-cyan-600 text-2xl font-bold transition-colors duration-200"
        >
          Explore
        </Link>
      </div>
    );

  return (
    <div>
      <h1 className="text-center text-cyan-400 text-3xl my-4">
        My Favorites (
        <span className="text-white font-bold">{favorites.length}</span>)
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-360 mx-auto px-8 my-8">
        {favorites.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
