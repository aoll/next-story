import React from 'react';
import PropTypes from 'prop-types';
import { GridListTile as MaterialGridListTile } from '@material-ui/core';

const GridListTile = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialGridListTile {...defaultProps}>
      {children}
    </MaterialGridListTile>
  );
};

GridListTile.propTypes = {
  /**
   * Width of the tile in number of grid cells.
   */
  cols: PropTypes.number,
  /**
   * Height of the tile in number of grid cells.
   */
  rows: PropTypes.number,
};

GridListTile.defaultProps = {
  cols: 1,
  rows: 1
};

export default GridListTile;