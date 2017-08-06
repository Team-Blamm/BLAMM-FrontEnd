import React, { Component } from 'react';

import UserTypeDropdown from '../components/UserTypeDropdown'

export default class BaseLayout extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <header>
          <h1>HEADER GOES HERE</h1>
          <UserTypeDropdown />
        </header>
        {this.props.children}
        <div>FOOTER</div>
      </div>
    );
  }
};
