import React, { Component } from 'react';
import '../css/App.css';

class Logo extends Component {
  render() {
    return (
			<a href={this.props.url}>
				<img 
				src={this.props.src}
				className='logo'
				style={{left: this.props.left + 'vw'}}
				/>
			</a>
    );
  }
}

export default Logo;
