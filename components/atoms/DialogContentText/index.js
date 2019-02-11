import React from 'react';
import PropTypes from 'prop-types';
import { DialogContentText as MaterialDialogContentText } from '@material-ui/core';

const DialogContentText = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialDialogContentText {...defaultProps}>
      {children}
    </MaterialDialogContentText>
  );
};

DialogContentText.propTypes = {
  
    /**
    * The content of the component.
    */
    children: PropTypes.node,
    
};

DialogContentText.defaultProps = {
  
};

export default DialogContentText;