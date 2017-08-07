import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authedAsUser, authedAsAdmin, authenticate } from '../actions/authedActions';

import Header from '../components/Header';
import Footer from '../components/Footer';

class Base extends Component {

  componentWillMount() {
    console.log(this.props.authenticate);
    this.props.authenticate();
  }

  render() {
    console.log(this.props)
    return (
      <div className="App base" style={{fontFamily: "Bangers", backgroundColor: '#16B7F9' }}>
        <Header {...this.props} />
        {this.props.children}
        <Footer {...this.props} />
      </div>
    )
  }
};

  const mapStateToProps = (state) => {
    console.log(state);
    return {
      authed: state.authed.authed,
      userType: state.authed.userType,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      authenticate: () => {
        dispatch(authenticate())
      }
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Base);
