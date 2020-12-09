import App from "../App"
import ReactDOM from "react-dom"
import React from 'react'
import profileReducer, {addPostCreator, deletePost} from "./profile-reducer";

let state = {
    whoLeftThePost: [
        {id: 1, name: 'Xtrip'},
        {id: 2, name: 'Xtrip'},
        {id: 3, name: 'Xtrip'},
        {id: 4, name: 'Nikita'},
        {id: 5, name: 'Dimych'},
        {id: 6, name: 'Alexey'},
        {id: 7, name: 'Susana'},
        {id: 8, name: 'Misha'},
        {id: 9, name: 'Xtrip'},
    ],

    posts: [
        {id: 1, message: 'Hello, i study react!', likesCount: 10},
        {id: 2, message: 'I learn props', likesCount: 14},
        {id: 3, message: 'I learn map', likesCount: 15},
        {id: 4, message: 'You dont learned react!', likesCount: -10},
        {id: 5, message: 'He will learn!', likesCount: 16},
        {id: 6, message: 'Yeah baby!', likesCount: 11},
        {id: 7, message: 'Nikita, you are terrible', likesCount: 11},
        {id: 8, message: 'how is the study of algorithms going?', likesCount: 11},
        {id: 9, message: 'I paused for now, other priorities, but i will return to them ', likesCount: 11},
    ],
}

it('length of posts should be incremented', () => {
//    1 test data
    let action = addPostCreator("it-kamasutra")
//    2 action
    let newState = profileReducer(state, action)
//    3 expectation
    expect(newState.posts.length).toBe(10)
})

it('message of new post should be correct', () => {
//    1 test data
    let action = addPostCreator("it-kamasutra")
//    2 action
    let newState = profileReducer(state, action)
//    3 expectation
    expect(newState.posts[9].message).toBe("it-kamasutra")
})

it ('after deleting length of message should be decrement', () => {
    //    1 test data
    let action = deletePost(1)
//    2 action
    let newState = profileReducer(state, action)
//    3 expectation
    expect(newState.posts.length).toBe(8)
})