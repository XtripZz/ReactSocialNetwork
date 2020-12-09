import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a3106ad8-3159-40c0-8fdc-86c99053381a"
    },
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    followUser(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },

    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },

    logout() {
        return instance.delete(`auth/login`)
    }
}