// Packages
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Clipboard from 'clipboard';

// Assets
import '../css/App.css';
import githublogo from '../img/github.svg';
import linkedinlogo from '../img/linkedin.svg';
import me from '../img/me.png';
import paperClipIcon from '../img/paperclip.png';

// Components
import Logo from './Logo';
import ContactMenu from './ContactMenu';
import CopiedNotification from './CopiedNotification';


class TopBar extends Component {
	constructor(props) {
		super(props);
	  this.state = {
	    renderContact: false,
	    renderCopiedNotification: false
	  };
	  new Clipboard('#profilePicture');
	}

	showContact = () => {
		this.setState({renderContact: true});
	};

	hideContact = () => {
		this.setState({renderContact: false});
	};

	showCopiedNotification = () => {
		this.setState({renderCopiedNotification: true});
		setTimeout(this.hideCopiedNotification, 3000);
	};

	hideCopiedNotification = () => {
		this.setState({renderCopiedNotification: false});
	};

  render() {
  	let contact, paperClip, copiedNotification;
  	if (this.state.renderContact) {
  		contact = <ContactMenu></ContactMenu>;
  		paperClip = <img src={paperClipIcon} className='centre' id='paperClip' alt=''/>;
  	}
  	if (this.state.renderCopiedNotification) {
  		copiedNotification = <CopiedNotification />;
  	}
    return (
    	<span>
				<div id='topBar' style={{zIndex: 1}}>
					<h1 id="name2">andrew james lor</h1>
					<h1 id="name">andrew james lor</h1>
					<Logo src={linkedinlogo} url='https://www.linkedin.com/in/andrew-lor/'/>
					<Logo src={githublogo} url='https://github.com/andrewlor'/>
				  <Logo src={me} id='profilePicture' paperClip={paperClip}
				  	onMouseEnter={this.showContact}
				  	onMouseLeave={this.hideContact}
				  	onClick={this.showCopiedNotification}
				  	data-clipboard-text='a2lor@edu.uwaterloo.ca'></Logo>
				</div>
				<ReactCSSTransitionGroup
		      transitionName="contactMenu"
		      transitionEnterTimeout={250}
	      	transitionLeaveTimeout={250}>
			  	{contact}
			  </ReactCSSTransitionGroup>
			  <ReactCSSTransitionGroup
		      transitionName="copiedNotification"
		      transitionEnterTimeout={250}
	      	transitionLeaveTimeout={250}>
	      	{copiedNotification}
			  </ReactCSSTransitionGroup>

		  </span>
    );
  }
}

export default TopBar;
