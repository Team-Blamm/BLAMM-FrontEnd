import React, { Component } from 'react';


export default class BaseLayout extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <div>HEADER</div>
        {this.props.children}
        <div>FOOTER</div>
      </div>
    );
  }
}

;
