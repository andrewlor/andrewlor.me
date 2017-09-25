// Packages
import React, { Component } from 'react';

// Assets
import '../css/App.css';

class Logo extends Component {
  render() {
    return (
			<a className='logo' href={this.props.url} style={{left: this.props.left + 'vw'}} id={this.props.id} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} onClick={this.props.onClick}>
				<img
					id={this.props.id}
					src={this.props.src}
					style={{height: '5vw', width: '5vw'}}
				/>
				{this.props.paperClip}
			</a>
    );
  }
}

export default Logo;
