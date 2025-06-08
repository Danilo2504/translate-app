import axios from "axios";
import { BASE_URL } from "../utils/constants";

const instance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
   },
});

export default instance;