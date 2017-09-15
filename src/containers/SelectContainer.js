import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import Select from '../components/ProdDetail/Select';

import { incrementHours, decrementHours } from '../actions/selectActions';
import { addToCart } from '../actions/cartActions';


class SelectContainer extends Component {

  render() {
    console.log(this.props)
    console.log("^props for selects container")
      return (
      <div>
        <Select
          product={this.props.product}
          userType={this.props.userType}
          hours={this.props.hours}
          increment={this.props.incrementHours}
          decrement={this.props.decrementHours}
          addToCart={this.props.addToCart}
          itemAdded={this.props.itemAdded}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userType: state.authed.userType,
    product: ownProps.product,
    hours: state.counter.hours,
  }
}

const mapDispatchToProps = (dispatch) => {
      return bindActionCreators({
        incrementHours: incrementHours,
        decrementHours: decrementHours,
        addToCart: addToCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer);
