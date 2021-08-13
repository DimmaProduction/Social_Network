import { UsersAPI } from "../components/api/Api";

const ADD_NEW_POST = "ADD_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";


let initialState = {
  posts: [
    { id: 1, likes: 54432, message: 'Hey, i know the props ))' },
    { id: 2, likes: 123, message: 'How are you ?!' },
    { id: 3, likes: 0, message: "It's my first post" },
    { id: 4, likes: 222, message: "IT - KAMASUTRA" },
    { id: 5, likes: 333, message: "THE COOLEST COURSE" }
  ],
  profile: null,
  userStatus: ''
};

const profileReducer = (state = initialState, action) => {
  
  switch (action.type){
    case ADD_NEW_POST : 
      let newPost = {
        id: state.posts.length + 1,
        message: action.newPost,
        likes: 0
      };
      return {
         ...state, 
         posts: [ ...state.posts, newPost]
      };
    
    case SET_USER_PROFILE : 
      return {
        ...state, 
        profile: { ...action.profile },
      };

    case SET_STATUS:
      return { ...state, userStatus: action.status };

    default :
      return state;
  } 

}

export const addNewPostActionCreator = (newPost) => ({type: ADD_NEW_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatusAC = (status) => ({ type: SET_STATUS, status });


export const getUsersTC = (userID) =>
  async (dispatch) => {
    let data = await UsersAPI.getUsers(userID);
    dispatch(setUserProfile(data));
  }

export const getUserStatusTC = (id) =>
  async (dispatch) => {
    let data = await UsersAPI.getStatus(id);
    dispatch(setStatusAC(data));
}

export const setUserStatusTC = (status) =>
  async (dispatch) => {
    let data = await UsersAPI.setStatus(status);

    if (data.resultCode === 0) dispatch(setStatusAC(status));
    else console.log('error, in put api request ');
  }


export default profileReducer;