import React from 'react';
import PropTypes from 'prop-types';
import { Table as MaterialTable } from '@material-ui/core';

const Table = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTable {...defaultProps}>
      {children}
    </MaterialTable>
  );
};

Table.propTypes = {
  
    /**
    * The content of the table, normally `TableHead` and `TableBody`.
    */
    children: PropTypes.node.isRequired,
    
  
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
    * Allows TableCells to inherit padding of the Table.
    */
    padding: PropTypes.oneOf(['default','checkbox','dense','none']),
    
};

Table.defaultProps = {
  padding: 'default'
};

export default Table;