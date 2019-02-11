import React from 'react';
import PropTypes from 'prop-types';
import { TableBody as MaterialTableBody } from '@material-ui/core';

const TableBody = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTableBody {...defaultProps}>
      {children}
    </MaterialTableBody>
  );
};

TableBody.propTypes = {
  
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

TableBody.defaultProps = {
  
};

export default TableBody;