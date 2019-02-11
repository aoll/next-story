import React from 'react';
import PropTypes from 'prop-types';
import { TablePagination as MaterialTablePagination } from '@material-ui/core';

const TablePagination = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTablePagination {...defaultProps}>
      {children}
    </MaterialTablePagination>
  );
};

TablePagination.propTypes = {
  
    /**
    * The component used for displaying the actions.
  * Either a string to use a DOM element or a component.
    */
    ActionsComponent: PropTypes.element,
    
  
    /**
    * Properties applied to the back arrow [`IconButton`](/api/icon-button/) component.
    */
    backIconButtonProps: PropTypes.object,
    
  
    /**
    * @ignore
    */
    colSpan: PropTypes.number,
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
    */
    component: PropTypes.custom,
    
  
    /**
    * The total number of rows.
    */
    count: PropTypes.number.isRequired,
    
  
    /**
    * Customize the displayed rows label.
    */
    labelDisplayedRows: PropTypes.func,
    
  
    /**
    * Customize the rows per page label. Invoked with a `{ from, to, count, page }`
  * object.
    */
    labelRowsPerPage: PropTypes.node,
    
  
    /**
    * Properties applied to the next arrow [`IconButton`](/api/icon-button/) element.
    */
    nextIconButtonProps: PropTypes.object,
    
  
    /**
    * Callback fired when the page is changed.
  * 
  * @param {object} event The event source of the callback
  * @param {number} page The page selected
    */
    onChangePage: PropTypes.func.isRequired,
    
  
    /**
    * Callback fired when the number of rows per page is changed.
  * 
  * @param {object} event The event source of the callback
    */
    onChangeRowsPerPage: PropTypes.func,
    
  
    /**
    * The zero-based index of the current page.
    */
    page: PropTypes.number.isRequired,
    
  
    /**
    * The number of rows per page.
    */
    rowsPerPage: PropTypes.number.isRequired,
    
  
    /**
    * Customizes the options of the rows per page select field. If less than two options are
  * available, no select field will be displayed.
    */
    rowsPerPageOptions: PropTypes.array,
    
  
    /**
    * Properties applied to the rows per page [`Select`](/api/select/) element.
    */
    SelectProps: PropTypes.object,
    
};

TablePagination.defaultProps = {
  labelDisplayedRows: function labelDisplayedRows(_ref) {
  var from = _ref.from,
      to = _ref.to,
      count = _ref.count;
  return "".concat(from, "-").concat(to, " of ").concat(count);
},
  labelRowsPerPage: 'Rows per page:',
  rowsPerPageOptions: [10, 25, 50, 100]
};

export default TablePagination;