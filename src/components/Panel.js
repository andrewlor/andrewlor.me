import React, { Component } from 'react';
import '../css/App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Panel extends Component {
  render() {
    return (
			<div className='panel'>
        <div style={{position: 'relative'}} className='centre'>
          <h3 className='panelText'>{this.props.name}</h3>
        </div>
      </div>
    );
  }
}

export default Panel;
