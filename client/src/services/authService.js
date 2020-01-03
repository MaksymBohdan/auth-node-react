import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

const userCreate = credentials =>
  axios.post("/signup", credentials).then(({ data }) => data.person);

export { userCreate };
