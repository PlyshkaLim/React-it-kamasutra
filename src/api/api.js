import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    "API-KEY": "d29e5609-30e6-4309-9953-3db7bf9f7b93"
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get('users?page=' + currentPage + '&count=' + pageSize).then(response => response.data);
    }
}

