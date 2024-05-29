import axios from "axios";

axios.defaults.baseURL = "https://pp5-nerdalert-drf-api-95b8bddc0859.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();