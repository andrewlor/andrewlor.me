// Packages
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Assets
import '../css/App.css';
import dataObj from '../helpers/data';

// Components
import TopBar from './TopBar';
import Header from './Header';
import PanelRow from './PanelRow';


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
	      	<TopBar style={{zIndex: 1}}></TopBar>
	      	<div id='topSpace'></div>
	      	{dataObj.headers.map((header, index) => {
	      		return <span key={index}>
		      		<Header name={header.name}/>
		      		<PanelRow panels={header.panels}/>
	      		</span>
	      	})}
	      	<div style={{height: '10vw'}}></div>
	      	<div id='mobileEmail'>
	      		<h2>Contact: a2lor@uwaterloo.ca</h2>
	      	</div>
	      </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Resume;
