export type CharacterFilterGender = "female" | "male" | "genderless";
export type CharacterFilterStatus = "alive" | "dead" | "unknown";

export interface CharacterFilters {
  page?: number;
  name?: string;
  status?: CharacterFilterStatus;
  species?: string;
  type?: string;
  gender?: CharacterFilterGender;
}
