import axios from "axios";

const clientsAPI = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export default clientsAPI;