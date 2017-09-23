import React, { Component } from 'react';
import '../css/App.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
      	<h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Header;
