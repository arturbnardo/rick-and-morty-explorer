import type { PaginatedResponse } from "../types/api-info";
import type { Character } from "../types/character";
import type { CharacterFilters } from "../types/filters";
const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (
  filter?: CharacterFilters,
): Promise<PaginatedResponse<Character>> => {
  const params = new URLSearchParams();

  if (filter) {
    if (filter.name) params.append("name", filter.name);
    if (filter.status) params.append("status", filter.status);
    if (filter.species) params.append("species", filter.species);
    if (filter.type) params.append("type", filter.type);
    if (filter.gender) params.append("gender", filter.gender);
  }

  const response = await fetch(`${BASE_URL}/character?${params}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Request failed");
  }
};

export const getCharacterById = async (id: number): Promise<Character> => {
  const response = await fetch(`${BASE_URL}/character/${id}`);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Request failed");
  }
};
