import React from 'react';
import PropTypes from 'prop-types';
import { GridListTileBar as MaterialGridListTileBar } from '@material-ui/core';

const GridListTileBar = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialGridListTileBar {...defaultProps}>
      {children}
    </MaterialGridListTileBar>
  );
};

GridListTileBar.propTypes = {
  /**
   * Position of secondary action IconButton.
   */
  actionPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * Position of the title bar.
   */
  titlePosition: PropTypes.oneOf(['top', 'bottom']),
};

GridListTileBar.defaultProps = {
  actionPosition: 'right',
  titlePosition: 'bottom'
};

export default GridListTileBar;