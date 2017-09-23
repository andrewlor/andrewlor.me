// Packages
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Assets
import '../css/App.css';
import githublogo from '../img/github.svg';
import linkedinlogo from '../img/linkedin.svg';
import me from '../img/me.png';

// Components
import Logo from './Logo';
import ContactMenu from './ContactMenu';


class TopBar extends Component {
	constructor(props) {
		super(props);
	  this.state = {
	    renderContact: false
	  };
	}

	showContact = () => {
		this.setState({renderContact: true});
	};

	hideContact = () => {
		this.setState({renderContact: false});
	};

  render() {
  	let contact;
  	if (this.state.renderContact) {
  		contact = <ContactMenu></ContactMenu>;
  	}
    return (
    	<span>
				<div id='topBar' style={{zIndex: 1}}>
					<Logo src={linkedinlogo} url='https://www.linkedin.com/in/andrew-lor/'/>
					<Logo src={githublogo} left={7} url='https://github.com/andrewlor'/>
				  <Logo src={me} left={13} id='profilePicture' onMouseEnter={this.showContact} onMouseLeave={this.hideContact}></Logo>
					<h1 id="name">&lt;Andrew James Lor/&gt;</h1>
				</div>
				<ReactCSSTransitionGroup
		      transitionName="contactMenu"
		      transitionEnterTimeout={250}
	      	transitionLeaveTimeout={250}>
			  	{contact}
			  </ReactCSSTransitionGroup>
		  </span>
    );
  }
}

export default TopBar;
