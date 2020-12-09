import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {

  _state: {

    profilePage: {
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

      newPostText: `SamuraiJS`,

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
    },

    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Alexey'},
        {id: 3, name: 'Dimych'},
        {id: 4, name: 'Katya'},
        {id: 5, name: 'Misha'},
        {id: 6, name: 'Susana'},
      ],

      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you, friend?'},
        {id: 3, message: 'You learned react?'},
        {id: 4, message: 'Hello, you here?'},
        {id: 5, message: 'Go go go!'},
        {id: 6, message: 'JavaScript is nice!'},
      ],

      newMessageText: 'Hello Samurai',
    },

  },

  _callSubscriber() {
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
   this._state.profilePage = profileReducer(this._state.profilePage,action);
   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
   this._callSubscriber(this._state);
  },
}

export default store;
