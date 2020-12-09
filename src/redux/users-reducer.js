import {usersAPI} from "../API/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count,
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId,
    }
}

export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}

export const setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalCount,
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
}

export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId,
    }
}

// TC

export const requestUsers = (page, pageSize) => {
    return async dispatch => {
            dispatch(setCurrentPage(page))
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(page, pageSize)
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount - 5800))
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
    return async dispatch => {
        followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess)
    }
}

export const unfollow = (userId) => {
    return async dispatch => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
    }
}

export default usersReducer;
