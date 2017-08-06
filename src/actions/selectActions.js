import * as types from "../static/actionTypes"

export function incrementHours() {
 console.log("action: INCREMENT");
  return {
    type: types.INCREMENT,
    payload: 1
  };
};

export function decrementHours() {
 console.log("action: DECREMENT");
  return {
    type: types.DECREMENT,
    payload: 1
  };
};
