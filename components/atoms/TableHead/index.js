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
  
};

TableHead.defaultProps = {
  
};

export default TableHead;