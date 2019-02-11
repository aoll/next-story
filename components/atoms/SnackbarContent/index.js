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
  
    /**
    * The action to display.
    */
    action: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The message to display.
    */
    message: PropTypes.node,
    
};

SnackbarContent.defaultProps = {
  
};

export default SnackbarContent;