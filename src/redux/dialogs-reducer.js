const SEND_MESSAGE = `SEND-MESSAGE`;

let initialState = {
  dialogs: [
    {id: 1, name: 'Artem'},
    {id: 2, name: 'Alexey'},
    {id: 3, name: 'Dimych'},
    {id: 4, name: 'Katya'},
    {id: 5, name: 'Misha'},
    {id: 6, name: 'Anna'},
  ],

  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'kek'},
    {id: 3, message: 'You learned react?'},
    {id: 4, message: 'wtf?'},
    {id: 5, message: 'Go go go!'},
    {id: 6, message: 'privet'},
  ],
}

const dialogsReducer = (state = initialState, action) => {


  switch (action.type) {

    case SEND_MESSAGE :
      return {
        ...state,
        messages: [
          ...state.messages,
          {id: 7, message: action.newMessageBody},
        ]
      }

    default :
      return state;
  }
}

export const sendMessageCreator = newMessageBody => ({
  type: SEND_MESSAGE,
  newMessageBody
})


export default dialogsReducer;
