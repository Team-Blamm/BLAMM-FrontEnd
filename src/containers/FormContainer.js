import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import EditProdForm from '../components/EditProdForm';
import AddProdForm from '../components/AddProdForm';

import { addProduct, editProduct } from '../actions/productActions';

class FormContainer extends Component {
  render() {
      return (
      <div>
        { this.props.product ? (
          <EditProdForm
            product={this.props.product}
            editProduct={this.props.editProduct}
            initialValues={this.props.initialValues} />
        ) : (
          <AddProdForm addProduct={this.props.addProduct} />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userType: state.authed.userType,
    product: ownProps.product,
    reqForm: state.products.reqForm,
  }
}

const mapDispatchToProps = function(dispatch) {
    return {
      addProduct: function(values) {
        dispatch(addProduct(values));
      },
      editProduct: function(values) {
        dispatch(editProduct(values));
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
