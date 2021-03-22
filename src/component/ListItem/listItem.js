import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render() {
    const { title, desc } = this.props;
    return (
      <div data-test="list-component">
        <h2 data-test="title">{title}</h2>
        <div data-test="description">{desc}</div>
      </div>
    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ListItem;
