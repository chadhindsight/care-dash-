import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
    //? (baseURL = 'here should be your production endpoint')
    ? (baseURL = window.location.origin)
    : (baseURL = 'http://localhost:5000');

const service = axios.create({ withCredentials: true, baseURL });
// register, login, logout
const actions = {
    register: async(userInfo) => {
        return await service.post('/register', userInfo)
    },
    login: async (userInfo) => {
        return await service.post('/login', userInfo)
    },
    logout: async (userInfo) => {
        return await service.get('/logout')
    },
    showUser: async (userInfo) => {
        return await service.get('/profile')
    }
}    
export default actions;