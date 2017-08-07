import * as types from "../static/actionTypes";

const initialState = {
  authed: false,
  userType: "user"
}

const userType = (state=initialState, action) => {
  switch (action.type) {
    case types.AUTHED_AS_USER:
      return {
        ...state,
        authed: true,
        userType: "user"
      }
    case types.AUTHED_AS_ADMIN:
      return {
        ...state,
        authed: true,
        userType: "admin"
      }
    break;
  }
  return state;
}

export default userType;
