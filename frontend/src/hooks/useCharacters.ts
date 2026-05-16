import { useEffect, useState } from "react";
import { getCharacters } from "../services/rickAndMortyApi";
import type { PaginatedResponse } from "../types/api-info";
import type { Character } from "../types/character";

export const useCharacters = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PaginatedResponse<Character> | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const characters = await getCharacters();
        setData(characters);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unkown error");
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);
  return { loading, data, error };
};
