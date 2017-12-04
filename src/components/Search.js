import React from 'react';

export default class Search extends React.Component {
  onChange = e => this.props.setSearch(e.target.value);
  render() {
    return (
      <input
        value={this.props.search}
        onChange={this.onChange}
        type="text"
        placeholder="search"
      />
    );
  }
}
