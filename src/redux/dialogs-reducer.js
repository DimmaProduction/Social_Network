const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

let initialState = {
    dialogs: [
      { id: 1, name: 'Sasha' },
      { id: 2, name: 'Vlad' },
      { id: 3, name: 'Vitalik' },
      { id: 4, name: 'Tanya' }
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you  ?!' },
      { id: 3, message: 'YOOOU !!' },
      { id: 4, message: 'YOOOU !!' }
    ],
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type){
    
    case ADD_NEW_MESSAGE :
        let newMessageElement = {
          id: state.messages.length + 1,
          message: action.newMessage
        }
        return {
          ...state,
          messages: [...state.messages, newMessageElement],
        };

    default :
      return state;
  } 


}

export const addNewMessageAC = (newMessage) => ({type: ADD_NEW_MESSAGE, newMessage});

export default dialogsReducer;