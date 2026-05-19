import { useEffect, useState } from "react";
import { getCharacters } from "../services/rickAndMortyApi";
import type { PaginatedResponse } from "../types/api-info";
import type { Character } from "../types/character";
import type { CharacterFilterStatus } from "../types/filters";
import { useDebounce } from "./useDebounce";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

interface UseCharactersProps {
  name?: string;
  status?: CharacterFilterStatus;
  page: number;
}

export const useCharacters = ({ page, name, status }: UseCharactersProps) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PaginatedResponse<Character> | null>(null);
  const [error, setError] = useState("");

  const { debounce } = useDebounce(750);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const characters = await getCharacters({
          name: name?.trim(),
          status,
          page,
        });
        setData(characters);
      } catch (err) {
        if (isAxiosError(err) && err.status === 404) {
          toast.error("Failed to find characters. Please try again.");
          setData((state) =>
            state !== null ? { ...state, results: [] } : null,
          );
          return;
        }

        setError(isAxiosError(err) ? err.message : "");
      } finally {
        setLoading(false);
      }
    };
    debounce(fetchCharacters);
  }, [debounce, name, status, page]);
  return { loading, data, error };
};
