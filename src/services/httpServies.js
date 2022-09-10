
import axios from "axios";

let MODE = /*process.env.REACT_APP_MODE ||*/ 'DEVELOPMENT'

let BASE_URL = 'http://localhost:7000'

const instance = axios.create({
    baseURL: `${BASE_URL}`,
    timeout: 15000,
});

const responseBody = (response) => response.data;

const requests = {
    get: (url, headers) => instance.get(url, headers).then(responseBody),
    post: (url, body) => instance.post(url, body).then(responseBody),
    patch: (url, body) => instance.patch(url, body).then(responseBody),
    delete: (url) => instance.delete(url).then(responseBody),
};

export default requests;