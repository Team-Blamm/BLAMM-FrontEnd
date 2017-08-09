import React, {Component} from 'react';
import {incrementHours, decrementHours} from '../../actions/selectActions.js'

class CartItem extends Component {

  render() {
    return (
      <div>
        <div>
          {/* <button value="-" onClick={this.decrementHours}>-</button> */}
          Hours: {this.props.hours}
          {/* <button value="+" onClick={this.incrementHours}>+</button> */}
        </div>
        <div>
          Total: {this.props.itemTotal}
        </div>
      </div>
    );
  }
}

// incrementHours = e => {
//   console.log("incrementHours triggered by onChange");
//   this.props.incrementHours();
// };
//
// decrementHours = e => {
//   console.log("decrementHours triggered by onChange");
//   this.props.decrementHours();
// };
