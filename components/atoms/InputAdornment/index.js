import React from 'react';
import PropTypes from 'prop-types';
import { InputAdornment as MaterialInputAdornment } from '@material-ui/core';

const InputAdornment = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialInputAdornment {...defaultProps}>
      {children}
    </MaterialInputAdornment>
  );
};

InputAdornment.propTypes = {
  
    /**
    * The content of the component, normally an `IconButton` or string.
    */
    children: PropTypes.node.isRequired,
    
  
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
    * Disable pointer events on the root.
  * This allows for the content of the adornment to focus the input on click.
    */
    disablePointerEvents: PropTypes.bool,
    
  
    /**
    * If children is a string then disable wrapping in a Typography component.
    */
    disableTypography: PropTypes.bool,
    
  
    /**
    * @ignore
    */
    muiFormControl: PropTypes.object,
    
  
    /**
    * The position this adornment should appear relative to the `Input`.
    */
    position: PropTypes.oneOf(['start','end']),
    
  
    /**
    * The variant to use.
  * Note: If you are using the `TextField` component or the `FormControl` component
  * you do not have to set this manually.
    */
    variant: PropTypes.oneOf(['standard','outlined','filled']),
    
};

InputAdornment.defaultProps = {
  disablePointerEvents: false,
  disableTypography: false
};

export default InputAdornment;