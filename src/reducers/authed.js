import * as types from "../static/actionTypes";

import users from "../defaultUsers";

const initialState = {
  authed: false,
  userType: "user",
  userName: "",
  password: ""
}

const userType = (state=initialState, action) => {
  switch (action.type) {
    case types.AUTHED_AS_USER:
      return {
        ...state,
        authed: true,
        userType: "user",
        userName: users.user.username,
        password: users.user.password
      }
    case types.AUTHED_AS_ADMIN:
      return {
        ...state,
        authed: true,
        userType: "admin",
        userName: users.admin.username,
        password: users.admin.password
      }
    default:
      return state;
  }
}

export default userType;
