import { Link } from "react-router-dom";
import { FlaskConical } from "lucide-react";

function Header() {
  return (
    <header
      className="
    bg-gray-800
    flex 
    justify-between items-center 
    w-full h-16 
    text-gray-50 "
    >
      <Link
        to="/"
        className="
        text-2xl 
        flex
        items-center
        gap-2 p-4 md:p-8
       hover:text-cyan-400
         transition-colors duration-200"
      >
        <FlaskConical />
        Rick and Morty Explorer
      </Link>

      <nav
        className="
      flex 
      gap-4 p-4 md:p-8 
      text-xl "
      >
        <Link
          to="/"
          className="
        hover:text-cyan-400 
        transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className="
        hover:text-cyan-400
        transition-colors duration-200"
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
}

export default Header;
