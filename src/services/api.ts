import axios from "axios"; 

export const apiContacts = axios.create({
    baseURL: "https://contactsapi-ufzf.onrender.com",
    timeout: 55000
})

// Local Host

// export const apiContacts = axios.create({
//     baseURL: "http://localhost:3001",
//     timeout: 5000
// })