import React from 'react';
import PropTypes from 'prop-types';
import { DialogActions as MaterialDialogActions } from '@material-ui/core';

const DialogActions = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialDialogActions {...defaultProps}>
      {children}
    </MaterialDialogActions>
  );
};

DialogActions.propTypes = {
  
    /**
    * The content of the component.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * If `true`, the dialog actions do not have additional margin.
    */
    disableActionSpacing: PropTypes.bool,
    
};

DialogActions.defaultProps = {
  disableActionSpacing: false
};

export default DialogActions;