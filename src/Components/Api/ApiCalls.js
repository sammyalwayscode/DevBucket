import axios from "axios";

const mainURI = "http://localhost:2001/api";

// export const signUp = async () => {
//   return await axios
//     .post(`${mainURI}/signUpUser`)
//     .then((res) => res.data)
//     .catch((err) => err);
// };

export const getAllProjects = async () => {
  return await axios
    .get(`${mainURI}/allProjects`)
    .then((res) => res.data)
    .catch((err) => err);
};

export const getProjectDetails = async (id) => {
  return await axios
    .get(`${mainURI}/project/detail/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
};

export const getUserComments = async () => {
  return await axios.get();
};

export const getProjectComments = async (id) => {
  return await axios
    .get(`${mainURI}/comments/${id}/projectComments`)
    .then((res) => res.data)
    .catch((err) => err);
};
