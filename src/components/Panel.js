import React, { Component } from 'react';
import '../css/App.css';

class Panel extends Component {
  render() {
    return (
      <span>
  			<button className='panel' style={this.props.isExpanded ? {backgroundColor: '#ce0000'} : {}}>
          <h3 className='panelText'>{this.props.name}</h3>
        </button>
        <div className='panelExpansionConnecter'></div>
      </span>
    );
  }
}

export default Panel;
