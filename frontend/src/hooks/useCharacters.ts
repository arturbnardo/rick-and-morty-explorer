import { useEffect, useState } from "react";
import { getCharacters } from "../services/rickAndMortyApi";
import type { PaginatedResponse } from "../types/api-info";
import type { Character } from "../types/character";
import type { CharacterFilters } from "../types/filters";

export const useCharacters = (filter?: CharacterFilters) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PaginatedResponse<Character> | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const characters = await getCharacters(filter);
        setData(characters);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unkown error");
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [filter]);
  return { loading, data, error };
};
