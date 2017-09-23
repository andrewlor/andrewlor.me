// Packages
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Assets
import '../css/App.css';

// Components
import TopBar from './TopBar';
import Header from './Header';
import Panel from './Panel';


class Resume extends Component {
  render() {
    return (
    	<ReactCSSTransitionGroup
	      transitionName="resume"
	      transitionEnter={false}
      	transitionLeave={false}
	      transitionAppear={true}
      	transitionAppearTimeout={2000}>
        <div id="resume" className="centre">
	      	<TopBar style={{zIndex: 100}}></TopBar>
	      	<div style={{height: '8vw'}}></div>
	      	<Header name='Skills'/>
	      	<Header name='Education'/>
	      	<Header name='Work Experience'/>
	      	<Header name='Passion Projects'/>
	      	<Header name='Hobbies and Interests'/>
	      </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Resume;
