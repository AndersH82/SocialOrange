import axios from "axios";

axios.defaults.baseURL = 'https://socialorangeapi-e92b8d7040bd.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();




