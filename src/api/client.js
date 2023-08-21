import axios from "axios";


// https://fivestarback-x6vms.ondigitalocean.app/api/movies/top-rated
const client = axios.create({
  baseURL: "https://fivestarback-x6vms.ondigitalocean.app/api",
});

export default client;
