import React, { Component } from 'react';
import '../css/App.css';

class PanelExpansion extends Component {
	componentWillUnmount = this.props.componentWillUnmount;

  render() {
    return (
			<div className='panelExpansion'>
				<h3 className='centre' style={{position: 'relative'}}>{this.props.description}</h3>
			</div>
    );
  }
}

export default PanelExpansion;
