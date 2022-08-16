import axios from 'axios';

const baseApi = process.env.REACT_APP_BASE_URL

const instance = axios.create({
    baseURL: baseApi
})

export default instance