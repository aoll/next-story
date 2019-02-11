import React from 'react';
import PropTypes from 'prop-types';
import { GridList as MaterialGridList } from '@material-ui/core';

const GridList = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialGridList {...defaultProps}>
      {children}
    </MaterialGridList>
  );
};

GridList.propTypes = {
  /**
   * Grid Tiles that will be in Grid List.
   */
  children: PropTypes.node.isRequired,
  /**
   * Number of columns.
   */
  cols: PropTypes.number,
  /**
   * Number of px for the spacing between tiles.
   */
  spacing: PropTypes.number,
};

GridList.defaultProps = {
  cols: 2,
  spacing: 4
};

export default GridList;