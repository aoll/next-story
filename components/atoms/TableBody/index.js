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
  
};

TableBody.defaultProps = {
  
};

export default TableBody;