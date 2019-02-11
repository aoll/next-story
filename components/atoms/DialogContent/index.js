import React from 'react';
import PropTypes from 'prop-types';
import { DialogContent as MaterialDialogContent } from '@material-ui/core';

const DialogContent = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialDialogContent {...defaultProps}>
      {children}
    </MaterialDialogContent>
  );
};

DialogContent.propTypes = {
  
};

DialogContent.defaultProps = {
  
};

export default DialogContent;