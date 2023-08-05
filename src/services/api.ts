import axios from "axios"; 

export const apiContacts = axios.create({
    baseURL: "https://contactsapi-ufzf.onrender.com",
    timeout: 25000
})