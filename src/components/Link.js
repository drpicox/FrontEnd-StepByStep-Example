import React, { Component } from 'react';

import './Link.css';

export default class Link extends Component {
  onClick = () => {
    this.props.setView(this.props.root, this.props.id);
  };
  render() {
    return (
      <span className="Link" onClick={this.onClick}>
        {this.props.text} »
      </span>
    );
  }
}
