import React, { Component } from 'react';
import '../css/App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Panel from './Panel';
import PanelExpansion from './PanelExpansion';

class PanelRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expansion: null,
      renderExpansion: false,
    }
  }

  panelExpansionUnmount = () => {
  	this.setState({expansion: null});
  }

  expand = (description) => {
  	if (!this.state.expansion) {
  		this.setState({renderExpansion: true, expansion: <PanelExpansion componentWillUnmount={this.panelExpansionUnmount} description={description}/>});
  	}
  };

  collapse = () => {
    this.setState({renderExpansion: false});
  }

  render() {
    return (
      <div className='panelBox'>
       	{this.props.panels.map((element) => {
       		return <Panel name={element.name} onMouseEnter={() => {this.expand(element.description)}} onMouseLeave={this.collapse}></Panel>;
       	})}
        <ReactCSSTransitionGroup
          transitionName="panelExpansion"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
          {this.state.renderExpansion ? this.state.expansion : null}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default PanelRow;
