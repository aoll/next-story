import React from 'react';
import PropTypes from 'prop-types';
import { TableFooter as MaterialTableFooter } from '@material-ui/core';

const TableFooter = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTableFooter {...defaultProps}>
      {children}
    </MaterialTableFooter>
  );
};

TableFooter.propTypes = {
  
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

TableFooter.defaultProps = {
  
};

export default TableFooter;