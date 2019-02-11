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
    * Number of px for one cell height.
  * You can set `'auto'` if you want to let the children determine the height.
    */
    cellHeight: PropTypes.union,
    
  
    /**
    * Grid Tiles that will be in Grid List.
    */
    children: PropTypes.node.isRequired,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * Number of columns.
    */
    cols: PropTypes.number,
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
    */
    component: PropTypes.element,
    
  
    /**
    * Number of px for the spacing between tiles.
    */
    spacing: PropTypes.number,
    
  
    /**
    * @ignore
    */
    style: PropTypes.object,
    
};

GridList.defaultProps = {
  cellHeight: 180,
  cols: 2,
  spacing: 4
};

export default GridList;