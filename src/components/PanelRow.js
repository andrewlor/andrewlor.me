import React, { Component } from 'react';
import '../css/App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Panel from './Panel';
import PanelExpansion from './PanelExpansion';

class PanelRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expansions: this.props.panels.map((element, index) => {
       		return <PanelExpansion info={element} key={index}/>;
       	}),
      renderExpansions: this.props.panels.map((element) => {return false}),
    }
  }

  expand = (index) => {
  	let newArr = this.state.renderExpansions;
  	newArr[index] = true;
  	if (!this.state.expansion) {
  		this.setState({renderExpansions: newArr});
  	}
  };

  collapse = (index) => {
  	let newArr = this.state.renderExpansions;
  	newArr[index] = false;
    this.setState({renderExpansions: newArr});
  }

  render() {
    return (
      <div className='panelBox'>
       	{this.props.panels.map((element, index) => {
       		return <Panel name={element.name} onMouseEnter={() => {this.expand(index)}} onMouseLeave={() => {this.collapse(index)}} key={index}/>;
       	})}
        <ReactCSSTransitionGroup
          transitionName="panelExpansion"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
          {this.state.expansions.map((element, index) => {
          	return this.state.renderExpansions[index] ? element : null
          })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default PanelRow;
