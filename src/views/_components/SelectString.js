import React, { Component } from 'react';

export default class SelectString extends Component {
  onChange = ev => this.props.onChange(ev.target.value);
  render() {
    const { options, value } = this.props;
    return (
      <select value={value} onChange={this.onChange}>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }
}
