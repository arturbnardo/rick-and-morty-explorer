import { useEffect, useState } from "react";
import { getCharacterById } from "../services/rickAndMortyApi";
import type { Character } from "../types/character";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

interface useCharacterDetailsProps {
  id: number;
}

export const useCharacterDetails = ({ id }: useCharacterDetailsProps) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Character | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCharactersId = async () => {
      try {
        setLoading(true);
        const charactersId = await getCharacterById(id);
        setData(charactersId);
      } catch (err) {
        if (isAxiosError(err) && err.status === 404) {
          toast.error("Failed to find characters. Please try again.");
        } else {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchCharactersId();
  }, [id]);

  return { loading, data, error };
};
