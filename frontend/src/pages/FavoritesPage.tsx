import { Link } from "react-router-dom";
import { useFavoritesContext } from "../contexts/FavoritesContext";
import CharacterCard from "../components/CharacterCard";

function FavoritesPage() {
  const { favorites } = useFavoritesContext();

  if (favorites.length === 0)
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <p className="md:text-3xl text-2xl text-white font-semibold">
          Your favorites list is empty.
        </p>
        <p className="md:text-3xl text-2xl text-white font-semibold">
          Start exploring!
        </p>
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
      <h1 className="text-center text-cyan-400 text-2xl md:text-3xl my-8 ">
        My Favorites (
        <span className="text-[#facc15] font-semibold">{favorites.length}</span>
        )
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 max-w-360 mx-auto px-8 my-4">
        {favorites.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
