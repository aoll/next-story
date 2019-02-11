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
   * @ignore
   */
  colSpan: PropTypes.number,
  /**
   * The total number of rows.
   */
  count: PropTypes.number.isRequired,
  /**
   * Callback fired when the page is changed.
   * 
   * @param {object} event The event source of the callback
   * @param {number} page The page selected
   */
  onChangePage: PropTypes.func.isRequired,
  /**
   * The zero-based index of the current page.
   */
  page: PropTypes.number.isRequired,
  /**
   * The number of rows per page.
   */
  rowsPerPage: PropTypes.number.isRequired,
};

TablePagination.defaultProps = {
  
};

export default TablePagination;