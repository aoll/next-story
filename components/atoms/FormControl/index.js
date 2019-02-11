import React from 'react';
import PropTypes from 'prop-types';
import { FormControl as MaterialFormControl } from '@material-ui/core';

const FormControl = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialFormControl {...defaultProps}>
      {children}
    </MaterialFormControl>
  );
};

FormControl.propTypes = {
  
    /**
    * The contents of the form control.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
    */
    component: PropTypes.element,
    
  
    /**
    * If `true`, the label, input and helper text should be displayed in a disabled state.
    */
    disabled: PropTypes.bool,
    
  
    /**
    * If `true`, the label should be displayed in an error state.
    */
    error: PropTypes.bool,
    
  
    /**
    * If `true`, the component will take up the full width of its container.
    */
    fullWidth: PropTypes.bool,
    
  
    /**
    * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
    */
    margin: PropTypes.oneOf(['none','dense','normal']),
    
  
    /**
    * If `true`, the label will indicate that the input is required.
    */
    required: PropTypes.bool,
    
  
    /**
    * The variant to use.
    */
    variant: PropTypes.oneOf(['standard','outlined','filled']),
    
};

FormControl.defaultProps = {
  disabled: false,
  error: false,
  fullWidth: false,
  margin: 'none',
  required: false,
  variant: 'standard'
};

export default FormControl;