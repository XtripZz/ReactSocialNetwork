import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = `ADD-POST`
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const CONTACTS_ARE_SHOWN = 'CONTACTS_ARE_SHOWN'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    profileFriends: {
        allFriends: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Alexey'},
            {id: 3, name: 'Artem'},
            {id: 4, name: 'Susana'},
            {id: 5, name: 'Katya'},
            {id: 6, name: 'Misha'},
        ],

        onlineFriends: [
            {id: 1, name: 'Alexey'},
            {id: 2, name: 'Susana'},
            {id: 3, name: 'Misha'},
        ],
    },

    whoLeftThePost: [
        {id: 1, name: 'Xtrip'},
        {id: 2, name: 'Xtrip'},
        {id: 3, name: 'Xtrip'},
        {id: 4, name: 'Nikita'},
        {id: 5, name: 'Dimych'},
        {id: 6, name: 'Alexey'},
        {id: 7, name: 'Susana'},
        {id: 8, name: 'Nastya'},
        {id: 9, name: 'Xtrip'},
    ],

    posts: [
        {id: 1, message: 'blabla    !', likesCount: 10},
        {id: 2, message: 'I learn props', likesCount: 14},
        {id: 3, message: 'I learn map', likesCount: 15},
        {id: 4, message: 'privet', likesCount: -10},
        {id: 5, message: 'hi', likesCount: 16},
        {id: 6, message: '!!!', likesCount: 11},
        {id: 7, message: 'React', likesCount: 11},
        {id: 8, message: 'Javascript', likesCount: 11},
        {id: 9, message: 'kek', likesCount: 11},
    ],

    profile: null,

    isShowed: false,

    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST :
            let i = 9;
            i++;
            let whoLeft = {id: i, name: 'Xtrip'}
            let newPost = {id: i, message: action.newPostBody, likesCount: 16,}
            return {
                ...state,
                whoLeftThePost: [...state.whoLeftThePost, whoLeft],
                posts: [...state.posts, newPost],
            }

        case DELETE_POST:
            return {
                ...state,
                whoLeftThePost: state.whoLeftThePost.filter(w => w.id !== action.postId),
                posts: state.posts.filter(p => p.id !== action.postId)
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case CONTACTS_ARE_SHOWN:
            return {
                ...state,
                isShowed: action.areShown,
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state;
    }

}

export const addPostCreator = newPostBody => ({
    type: ADD_POST,
    newPostBody
})

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const contactsAreShown = (areShown) => ({
    type: CONTACTS_ARE_SHOWN,
    areShown,
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
})


// TC

export const getUserProfile = (userId) => {
    return async dispatch => {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
        console.log(response.data)
    }
}

export const getStatus = (userId) => {
    return async dispatch => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}

export const updateStatus = status => async dispatch => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}


export default profileReducer;
