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
    * An IconButton element to be used as secondary action target
  * (primary action target is the tile itself).
    */
    actionIcon: PropTypes.node,
    
  
    /**
    * Position of secondary action IconButton.
    */
    actionPosition: PropTypes.oneOf(['left','right']),
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * String or element serving as subtitle (support text).
    */
    subtitle: PropTypes.node,
    
  
    /**
    * Title to be displayed on tile.
    */
    title: PropTypes.node,
    
  
    /**
    * Position of the title bar.
    */
    titlePosition: PropTypes.oneOf(['top','bottom']),
    
};

GridListTileBar.defaultProps = {
  actionPosition: 'right',
  titlePosition: 'bottom'
};

export default GridListTileBar;