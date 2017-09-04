import * as types from "../static/actionTypes";

export function authedAsUser() {
  return {
    authed: true,
    type: types.AUTHED_AS_USER
  }
};

export function authedAsAdmin() {
  return {
    authed: true,
    type: types.AUTHED_AS_ADMIN
  }
};

export const authenticate = (products) => {
  return (dispatch) => {
    switch (types) {
      case types.AUTHED_AS_USER:
        return dispatch(authedAsUser());
      case types.AUTHED_AS_ADMIN:
        return dispatch(authedAsAdmin());
      default:
        return null;
    }
  }
};
