import React, { Component } from 'react';
import '../css/App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Panel extends Component {
  render() {
    return (
			<ReactCSSTransitionGroup
	      transitionName="resume"
	      transitionEnter={false}
      	transitionLeave={false}
	      transitionAppear={true}
      	transitionAppearTimeout={1000}>
        
      </ReactCSSTransitionGroup>
    );
  }
}

export default Panel;
