import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    "API-KEY": "cf552472-48ad-4167-94e3-f0ff3ea7bb4e",
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get('users?page=' + currentPage + '&count=' + pageSize)
            .then(response => response.data);
    },
    follow(userId) {
        return instance.post('follow/' + userId);
    },
    unfollow(userId) {
        return instance.delete('follow/' + userId);
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    },
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status});
    },
}