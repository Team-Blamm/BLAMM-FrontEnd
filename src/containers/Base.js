import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { authedAsUser, authedAsAdmin, authenticate } from '../actions/authedActions';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { withRouter } from 'react-router-dom';

class Base extends Component {

  componentWillMount() {
    this.props.authenticate();
  }

  render() {
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
    return {
      authed: state.authed.authed,
      userType: state.authed.userType,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      authenticate: () => {
        dispatch(authenticate())
      },
      authedAsUser: () => {
        dispatch(authedAsUser())
      },
      authedAsAdmin: () => {
        dispatch(authedAsAdmin())
      }
    }
  }


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Base));
