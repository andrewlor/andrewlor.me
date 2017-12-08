import React, { Component } from 'react';
import '../css/App.css';

class PanelExpansion extends Component {
	componentWillUnmount = this.props.componentWillUnmount;

  render() {
    return (
			<div className='panelExpansion'>
				<div className='panelExpansionContent'>
					<h3 style={{display: 'inline'}}>{this.props.info.header}</h3>
					<h3 style={{display: 'inline', float: 'right'}}>{this.props.info.date}</h3>
					<ul>
						{this.props.info.description.map((element, index) => {
							return <li key={index}>{element}</li>
						})}
					</ul>
					<div dangerouslySetInnerHTML={{__html: this.props.info.embed}}></div>
				</div>
			</div>
    );
  }
}

export default PanelExpansion;
