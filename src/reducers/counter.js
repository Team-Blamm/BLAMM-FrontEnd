import * as types from "../static/actionTypes";

const intialState = {
    hours: 1,
    price: 100,
    itemTotal: 0
}


const counter = (state = intialState, action) => {
  switch (action.type) {
      case types.INCREMENT:
        console.log("Just triggered INCREMENT action in reducers")
        console.log(state.hours + action.payload);
        state = {
          ...state,
          hours: state.hours + action.payload,
          itemTotal: state.hours * state.price
        }
        break;
      case types.DECREMENT:
        console.log("Just triggered DECREMENT action in reducers");
        state = {
          ...state,
          hours: state.hours - action.payload,
          itemTotal: state.hours * state.price
        }
        break;
    }
  return state;
}

export default counter;
