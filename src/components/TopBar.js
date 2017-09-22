import React, { Component } from 'react';
import '../css/App.css';
import githublogo from '../img/github.svg';
import linkedinlogo from '../img/linkedin.svg';
import Logo from './Logo';

class TopBar extends Component {
  render() {
    return (
			<div id='topBar'>
				<Logo src={githublogo} left={5} url='https://github.com/andrewlor'></Logo>
				<Logo src={linkedinlogo} url='https://www.linkedin.com/in/andrew-lor/'></Logo>
				<div>
					<h1 id="name">Andrew James Lor</h1>
				</div>
			</div>
    );
  }
}

export default TopBar;
