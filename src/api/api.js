import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    "API-KEY": "cf552472-48ad-4167-94e3-f0ff3ea7bb4e"
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get('users?page=' + currentPage + '&count=' + pageSize)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post('https://social-network.samuraijs.com/api/1.0/follow/' + userId);
    },
    unfollow(userId) {
        return instance.delete('https://social-network.samuraijs.com/api/1.0/follow/' + userId);
    },
}

