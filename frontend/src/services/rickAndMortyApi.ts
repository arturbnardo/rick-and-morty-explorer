import { api } from "../api/axios";
import type { PaginatedResponse } from "../types/api-info";
import type { Character } from "../types/character";
import type { CharacterFilters } from "../types/filters";

export const getCharacters = async (
  filter?: CharacterFilters,
): Promise<PaginatedResponse<Character>> => {
  const { data } = await api.get<PaginatedResponse<Character>>("/character", {
    params: {
      page: filter?.page || 1,
      name: filter?.name || undefined,
      status: filter?.status,
      species: filter?.species,
      type: filter?.type,
      gender: filter?.gender,
    },
  });

  return data;
};

export const getCharacterById = async (id: number): Promise<Character> => {
  const { data } = await api.get<Character>(`/character/${id}`);

  return data;
};
