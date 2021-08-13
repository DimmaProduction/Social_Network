import { stopSubmit } from "redux-form";
import { AuthAPI } from "../components/api/Api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
};

const authReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }


}

export const setAuthUserData = (id, login, email, isAuth) => ({ type: "SET_AUTH_USER_DATA", payload: { id, login, email, isAuth } });

export const getAuthUserDataTC = () =>
  async (dispatch) => {
    let data = await AuthAPI.me()

    if(data.resultCode === 0) {
      let { email, id, login } = data.data;
      dispatch(setAuthUserData(id, login, email, true));
    }

  }


export const Login = (email, password, rememberMe) =>
  async (dispatch) => {
    let data = await AuthAPI.login(email, password, rememberMe);

    if (data.resultCode === 0) {
      dispatch(getAuthUserDataTC());
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : "Some Error :(";
      dispatch(stopSubmit('loginForm', { _error: message }));
    }

  }

export const Logout = () =>
  async (dispatch) => {
    let data = await AuthAPI.logout()

    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }

  }

export default authReducer;