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
  
};

TableFooter.defaultProps = {
  
};

export default TableFooter;