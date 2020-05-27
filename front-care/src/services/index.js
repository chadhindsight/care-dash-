import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
    //? (baseURL = 'here should be your production endpoint')
    ? (baseURL = window.location.origin)
    : (baseURL = 'http://localhost:5000');

const service = axios.create({ withCredentials: true, baseURL });

// register, login, logout
const actions = {
    signup: async(user) => {
        return await service.post('/signup', user)
    },
    googleReg: async(user) => {
        return await service.post('/auth/google/care-dash', user)
    },
    login: async (userInfo) => {
        return await service.post('/login', userInfo)
    },
    logout: async () => {
        return await service.get('/logout')
    }, 
    isLoggedIn: async () => {
        return await service.get('/is-logged-in')
    },
    search: async (searchTerm) => {
        return await service.get(`/search?name=${searchTerm}`)
    }
}    
export default actions;