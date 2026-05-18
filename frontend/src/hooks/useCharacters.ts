import { useEffect, useState } from "react";
import { getCharacters } from "../services/rickAndMortyApi";
import type { PaginatedResponse } from "../types/api-info";
import type { Character } from "../types/character";
import type { CharacterFilterStatus } from "../types/filters";

export const useCharacters = (
  name?: string,
  status?: CharacterFilterStatus,
) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PaginatedResponse<Character> | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const characters = await getCharacters({ name, status });
        setData(characters);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unkown error");
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [name, status]);
  return { loading, data, error };
};
