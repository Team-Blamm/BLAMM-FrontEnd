import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
            initialValues={this.props.initialValues}
            reqForm={this.props.reqForm}
          />
        ) : (
          <AddProdForm addProduct={this.props.addProduct}
            reqForm={this.props.reqForm}
          />
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
  return bindActionCreators({
    addProduct: addProduct,
    editProduct: editProduct,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
