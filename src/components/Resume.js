import React, { Component } from 'react';
import '../css/App.css';
import TopBar from './TopBar';
import Header from './Header';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Panel from './Panel'

class Resume extends Component {
  render() {
    return (
    	<ReactCSSTransitionGroup
	      transitionName="resume"
	      transitionAppear={true}
      	transitionAppearTimeout={2000}>
        <div id="resume" className="centre">
	      	<TopBar></TopBar>
	      	<Panel></Panel>
	      </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Resume;
