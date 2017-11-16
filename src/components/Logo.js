// Packages
import React, { Component } from 'react';

// Assets
import '../css/App.css';

class Logo extends Component {
  render() {
    return (
			<a className='logo' href={this.props.url} style={{left: this.props.left + 'vw'}} id={this.props.id} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} onClick={this.props.onClick} data-clipboard-text={this.props['data-clipboard-text']}>
				<img
					id={this.props.id}
					src={this.props.src}
					className='logoImg'
				/>
				{this.props.paperClip}
			</a>
    );
  }
}

export default Logo;
