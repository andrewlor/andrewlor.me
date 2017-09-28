import React, { Component } from 'react';
import '../css/App.css';

class PanelExpansion extends Component {
	componentWillUnmount = this.props.componentWillUnmount;

  render() {
    return (
			<div className='panelExpansion' onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave}>
				<div className='panelExpansionContent'>
					<h3 style={{display: 'inline', fontSize: '1.25vw'}}>{this.props.info.header}</h3>
					<h3 style={{display: 'inline', float: 'right', fontSize: '1.25vw'}}>{this.props.info.date}</h3>
					<ul>
						{this.props.info.description.map((element, index) => {
							return <li key={index}>{element}</li>
						})}
					</ul>
				</div>
			</div>
    );
  }
}

export default PanelExpansion;
