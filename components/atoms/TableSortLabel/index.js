import React from 'react';
import PropTypes from 'prop-types';
import { TableSortLabel as MaterialTableSortLabel } from '@material-ui/core';

const TableSortLabel = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTableSortLabel {...defaultProps}>
      {children}
    </MaterialTableSortLabel>
  );
};

TableSortLabel.propTypes = {
  
    /**
    * If `true`, the label will have the active styling (should be true for the sorted column).
    */
    active: PropTypes.bool,
    
  
    /**
    * Label contents, the arrow will be appended automatically.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The current sort direction.
    */
    direction: PropTypes.oneOf(['asc','desc']),
    
  
    /**
    * Hide sort icon when active is false.
    */
    hideSortIcon: PropTypes.bool,
    
  
    /**
    * Sort icon to use.
    */
    IconComponent: PropTypes.element,
    
};

TableSortLabel.defaultProps = {
  active: false,
  direction: 'desc',
  hideSortIcon: false
};

export default TableSortLabel;