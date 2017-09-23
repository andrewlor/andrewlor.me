// Packages
import React, { Component } from 'react';

// Assets
import '../css/App.css';

class ContactMenu extends Component {
  render() {
    return (
			<div className='contactMenuShell'>
				<div className='contactMenuArrow'></div>
				<div className='contactMenu'>
					<h3 className='centre' style={{margin: 0}}>a2lor@uwaterloo.ca</h3>
				</div>
  		</div>
    );
  }
}

export default ContactMenu;
