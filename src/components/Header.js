import React, { Component } from 'react';
import '../css/App.css';

class Header extends Component {
  render() {
    return (
      <div className="header centre" style={{top: this.props.distFromTop + 'vw'}}>
      	<h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default Header;
