import * as types from "../static/actionTypes"



export const addToCart = (product) => {
  return (dispatch) => {
    fetch('/api/signup', {
          method: "POST",
          body: {
            "username": signupName.value,
            "password": signupPass.value
          }
        })
        .then()

}
