//fin fof fre
//nfn anfn
//imp req
import axios from "axios";

const URL = "https://swapi.dev/api/people";

export const getPeople = async (name) => {
  const url = `${URL}/?search=${name}&format=json`;
  const response = await axios.get(url);
  return response.data;
};
