import React, { Component } from "react";
import { connect } from 'react-redux';

import { authedAsUser, authedAsAdmin, authenticate } from '../actions/authedActions';
import { fetchProducts, deleteProduct } from '../actions/productActions';
import ProductsContainer from "./ProductContainer";
{/* The App is the point on both the URL and in view
  where the User/Admin will sign in.  Once they do,
  App will decide whether to show the User App or
  the Admin App */}

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(authenticate());
  }

  renderContent() {
    const { userType } = this.props.match.params
    switch (userType) {
      case "user":
        return <ProductsContainer />;
      case "admin":
        return <ProductsContainer />
      default:
        return null;
    }
  }

  render () {
    return (
          <div className="">
            <header>
              <h2>Welcome to Blamm, { this.props.userType }</h2>
              <h3>Cool Logo</h3>
                {this.renderContent()}
            </header>
          </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authed: state.authed,
    userType: state.userType,
    products: state.products.products,
    fetched: state.products.fetched
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts())
    },
    deleteProduct: () => {
      dispatch(deleteProduct())
    },
    authed: () => {
      dispatch(authenticate())
    }
  }
}


export default connect(mapStateToProps)(mapDispatchToProps)(App);
