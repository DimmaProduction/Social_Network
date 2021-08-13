import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, likes: 54432, message: 'Hey, i know the props ))' },
        { id: 2, likes: 123, message: 'How are you ?!' },
        { id: 3, likes: 0, message: "It's my first post" },
        { id: 4, likes: 222, message: "Yoooou" },
        { id: 5, likes: 333, message: "Yoooou" }
      ],
      newPostText: 'Way of SAMURAI'
    },
    dialogsPage: {
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
      newMessageText: 'new_message'
    }
  },

  getState() {
      return this._state;
  },

  _calSubscriber() {
    console.log('State changed');
  },
  
  subscribe(observer)  {
    this._calSubscriber = observer;
  },


  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._calSubscriber(store._state);
  }


}


export default store;
window.store = store;