import axios from "axios";

export const api = axios.create({ baseURL: "http://10.10.20.137:3333",
    timeout: 700
});