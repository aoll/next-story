import React from 'react';
import PropTypes from 'prop-types';
import { TableRow as MaterialTableRow } from '@material-ui/core';

const TableRow = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTableRow {...defaultProps}>
      {children}
    </MaterialTableRow>
  );
};

TableRow.propTypes = {
  
    /**
    * Should be valid <tr> children such as `TableCell`.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
    */
    component: PropTypes.element,
    
  
    /**
    * If `true`, the table row will shade on hover.
    */
    hover: PropTypes.bool,
    
  
    /**
    * If `true`, the table row will have the selected shading.
    */
    selected: PropTypes.bool,
    
};

TableRow.defaultProps = {
  hover: false,
  selected: false
};

export default TableRow;