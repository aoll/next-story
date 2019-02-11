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
    * Theoretically you can pass any node as children, but the main use case is to pass an img,
  * in which case GridListTile takes care of making the image "cover" available space
  * (similar to `background-size: cover` or to `object-fit: cover`).
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * Width of the tile in number of grid cells.
    */
    cols: PropTypes.number,
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
    */
    component: PropTypes.element,
    
  
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