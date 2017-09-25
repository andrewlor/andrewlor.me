import React, { Component } from 'react';
import '../css/App.css';

class CopiedNotification extends Component {
  render() {
    return (
			<div id='copiedNotification'>
        <h3 style={{color: 'white'}}>Copied to Clipboard</h3>
      </div>
    );
  }
}

export default CopiedNotification;
