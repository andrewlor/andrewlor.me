import React, { Component } from 'react';
import '../css/App.css';

class Panel extends Component {
  render() {
    return (
      <div style={{display: 'inline'}}>
  			<button className='panel' onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
          <h3 className='panelText'>{this.props.name}</h3>
        </button>
      </div>
    );
  }
}

export default Panel;
