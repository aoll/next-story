import React from 'react';
import PropTypes from 'prop-types';
import { SnackbarContent as MaterialSnackbarContent } from '@material-ui/core';

const SnackbarContent = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialSnackbarContent {...defaultProps}>
      {children}
    </MaterialSnackbarContent>
  );
};

SnackbarContent.propTypes = {
  
};

SnackbarContent.defaultProps = {
  
};

export default SnackbarContent;