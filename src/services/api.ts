import axios from "axios"; 

export const apiContacts = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 8000
})