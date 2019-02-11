import React from 'react';
import PropTypes from 'prop-types';
import { TableCell as MaterialTableCell } from '@material-ui/core';

const TableCell = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTableCell {...defaultProps}>
      {children}
    </MaterialTableCell>
  );
};

TableCell.propTypes = {
  
    /**
    * Set the text-align on the table cell content.
  * 
  * Monetary or generally number fields **should be right aligned** as that allows
  * you to add them up quickly in your head without having to worry about decimals.
    */
    align: PropTypes.oneOf(['inherit','left','center','right','justify']),
    
  
    /**
    * The table cell contents.
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
    * If `true`, content will align to the right.
    */
    numeric: PropTypes.custom,
    
  
    /**
    * Sets the padding applied to the cell.
  * By default, the Table parent component set the value.
    */
    padding: PropTypes.oneOf(['default','checkbox','dense','none']),
    
  
    /**
    * Set scope attribute.
    */
    scope: PropTypes.string,
    
  
    /**
    * Set aria-sort direction.
    */
    sortDirection: PropTypes.oneOf(['asc','desc',false]),
    
  
    /**
    * Specify the cell type.
  * By default, the TableHead, TableBody or TableFooter parent component set the value.
    */
    variant: PropTypes.oneOf(['head','body','footer']),
    
};

TableCell.defaultProps = {
  align: 'inherit'
};

export default TableCell;