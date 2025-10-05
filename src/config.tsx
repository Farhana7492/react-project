import axios from "axios";

const baseApiUrl = "http://localhost/php_react-api/api/";
const api = axios.create({
    baseURL:baseApiUrl,
    headers:{
        "Content-Type":"application/json"
    }
});
export default api;