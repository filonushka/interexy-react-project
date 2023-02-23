import $api from "../api";

 export interface ICharacterData {
  id: number;
  name: string;
  image: string;
  gender: string;
  species: string;
  status: string;
}

export const getCharacters = async () => {
  const { data } = await $api.get("character/");
  return data;
};

export const getCharacterById = async (id: number) => {
  const { data } = await $api.get(`character/${id}`);
  return data;
};
