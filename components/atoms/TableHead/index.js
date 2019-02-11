import React from 'react';
import PropTypes from 'prop-types';
import { TableHead as MaterialTableHead } from '@material-ui/core';

const TableHead = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTableHead {...defaultProps}>
      {children}
    </MaterialTableHead>
  );
};

TableHead.propTypes = {
  
    /**
    * The content of the component, normally `TableRow`.
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
    
};

TableHead.defaultProps = {
  
};

export default TableHead;