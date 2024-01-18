import Axios from "axios";
import { backendUrl } from "./helper";

const axios = Axios.create({
    baseURL: backendUrl,
    withCredentials: true
})

export default axios;