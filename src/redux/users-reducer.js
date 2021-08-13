import { FollowAPI, UsersAPI } from "../components/api/Api";

const FOLLOW_CHANGE = "FOLLOW_CHANGE";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const ADD_USERS = "ADD_USERS";
const TOGGLE_BTN_LOADING = "TOGGLE_BTN_LOADING";


let initialState = {
  users: [],
  pageSize: 10,
  currentPage: 1,
  totalUsersCount: 0,
  isFetching: false,
  idOfBtnLoading: [],
  portionSize: 10
};


const UsersReducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }

    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }

    case FOLLOW_CHANGE:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) { return { ...u, followed: !u.followed }; }
          else return u;
        })
      }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };

    case TOGGLE_FETCHING:
      return { ...state, isFetching: !state.isFetching };

    case TOGGLE_BTN_LOADING:
      return { ...state, 
        idOfBtnLoading: action.isFetching
        ? [...state.idOfBtnLoading, action.id]
        : state.idOfBtnLoading.filter(id => id !== action.id)};

    default:
      return state;
  }

}

export const setFollowChange = (id) => ({ type: "FOLLOW_CHANGE", userId: parseInt(id) });
export const setUsers = (users) => ({ type: "SET_USERS", users });
export const addUsers = (users) => ({ type: "ADD_USERS", users });
export const setCurrentPage = (currentPage) => ({ type: "SET_CURRENT_PAGE", currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: "SET_TOTAL_USERS_COUNT", totalUsersCount });
export const toggleFetching = () => ({ type: TOGGLE_FETCHING });
export const toggleBtnLoading = (isFetching, id) => ({ type: TOGGLE_BTN_LOADING, isFetching, id: parseInt(id) });


export const getUsersTC = (pageSize) =>
  async (dispatch) => {
    dispatch(toggleFetching());

    let data = await UsersAPI.setUsers(pageSize);
    dispatch(toggleFetching());
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setUsers(data.items));

  }

export const getMoreUsers = (currentPage) =>
  async (dispatch) => {
    dispatch(toggleFetching());

    let data = await UsersAPI.moreUsers(currentPage + 1, initialState.pageSize);
    dispatch(toggleFetching());
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setCurrentPage(currentPage + 1));
    dispatch(addUsers(data.items));
  }

export const getCurrentUsers = (currentPage) =>
  async (dispatch) => {
    dispatch(toggleFetching());

    let data = await UsersAPI.moreUsers(currentPage, initialState.pageSize);

    dispatch(toggleFetching());
    dispatch(setCurrentPage(currentPage));
    dispatch(setUsers(data.items));
  }

export const followTC = (id) =>
  async (dispatch) => {
    dispatch(toggleBtnLoading(true, id));

    let data = await FollowAPI.postFollow(id);
    dispatch(toggleBtnLoading(false, id));
    if (data.resultCode === 0) {
      dispatch(setFollowChange(id));
    }
  }

export const unFollowTC = (id) =>
  async (dispatch) => {
    dispatch(toggleBtnLoading(true, id));

    let data = await FollowAPI.deleteFollow(id);
    dispatch(toggleBtnLoading(false, id));
    if (data.resultCode === 0) {
      dispatch(setFollowChange(id));
    }
  }

export default UsersReducer;