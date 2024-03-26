import axios from "axios";

axios.defaults.baseURL = 'https://8000-andersh82-drfworkspace-me57xw0rdc4.ws-eu110.gitpod.io/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();