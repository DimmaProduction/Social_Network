
export const getPosts = (state) => {
  return state.profilePage.posts;
}

export const getProfile = (state) => {
  return state.profilePage.profile;
}

export const getStatus = (state) => {
  return state.profilePage.userStatus;
}

export const getAuthId = (state) => {
  return state.auth.id;
}

export const getIsAuth = (state) => {
  return state.auth.isAuth;
}

