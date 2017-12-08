// Packages
import React, { Component } from 'react';

// Assets
import '../css/App.css';

class Logo extends Component {
  render() {
    return (
			<a className='logo' href={this.props.url} id={this.props.id} onMouseEnter={this.props.onMouseEnter} onMouseLeave={this.props.onMouseLeave} onClick={this.props.onClick} data-clipboard-text={this.props['data-clipboard-text']}>
				<img
					id={this.props.id}
					src={this.props.src}
					style={{height: '100%', width: '100%'}}
					alt=''
				/>
				{this.props.paperClip}
			</a>
    );
  }
}

export default Logo;
