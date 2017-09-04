import * as types from "../static/actionTypes";

const intialState = {
    hours: 1,
    itemTotal: 0
}

// need to pass the rate to this so that the itemTotal can be calculated

const counter = (state = intialState, action) => {
  switch (action.type) {
      case types.INCREMENT:
        console.log("Just triggered INCREMENT action in reducers");
        return {
          ...state,
          hours: state.hours + action.payload,
          // itemTotal: state.hours * state.price
        }
        // break;
      case types.DECREMENT:
        console.log("Just triggered DECREMENT action in reducers");
        return {
          ...state,
          hours: state.hours - action.payload,
          // itemTotal: state.hours * state.price
        }
    }
  return state;
}

export default counter;
