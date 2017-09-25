// Packages
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
  		paperClip = <img src={paperClipIcon} className='centre' id='paperClip'/>;
  	}
  	if (this.state.renderCopiedNotification) {
  		copiedNotification = <CopiedNotification />;
  	}
    return (
    	<span>
				<div id='topBar' style={{zIndex: 1}}>
					<Logo src={linkedinlogo} url='https://www.linkedin.com/in/andrew-lor/'/>
					<Logo src={githublogo} left={7} url='https://github.com/andrewlor'/>
				  <Logo src={me} left={13} id='profilePicture' paperClip={paperClip}
				  	onMouseEnter={this.showContact}
				  	onMouseLeave={this.hideContact}
				  	onClick={this.showCopiedNotification}></Logo>
					<h1 id="name">&lt; andrew james lor /&gt;</h1>
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
