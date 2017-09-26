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
	      	<Header name='skills'/>
	      	<div className='panelBox'>
	      		<Panel name='node.js'/>
	      		<Panel name='html/css'/>
	      		<Panel name='ruby'/>
	      		<Panel name='java'/>
	      		<Panel name='c/c++'/>
	      	</div>
	      	<Header name='education'/>
	      	<Header name='work experience'/>
	      	<Header name='passion projects'/>
	      	<Header name='hobbies and interests'/>
	      </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default Resume;
