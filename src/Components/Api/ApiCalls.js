import axios from "axios";

const mainURI = "http://localhost:2001/api";

export const signUp = async () => {
  return await axios
    .post(`${mainURI}/signUpUser`)
    .then((res) => res.data)
    .catch((err) => err);
};
