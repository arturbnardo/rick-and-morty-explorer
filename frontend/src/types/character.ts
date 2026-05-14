export type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

export type CharacterStatus = "Alive" | "Dead" | "unknown";

export type Origin = {
  name: string;
  url: string;
};

export type Location = {
  name: string;
  url: string;
};

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type Info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export interface PaginatedResponse<T> {
  info: Info;
  results: T[];
}
