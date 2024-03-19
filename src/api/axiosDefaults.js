import axios from "axios";

axios.defaults.baseURL = 'https://socialorangeapi-6ce409532368.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;