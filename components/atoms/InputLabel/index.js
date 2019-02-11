import React from 'react';
import PropTypes from 'prop-types';
import { InputLabel as MaterialInputLabel } from '@material-ui/core';

const InputLabel = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialInputLabel {...defaultProps}>
      {children}
    </MaterialInputLabel>
  );
};

InputLabel.propTypes = {
  
    /**
    * The contents of the `InputLabel`.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * If `true`, the transition animation is disabled.
    */
    disableAnimation: PropTypes.bool,
    
  
    /**
    * If `true`, apply disabled class.
    */
    disabled: PropTypes.bool,
    
  
    /**
    * If `true`, the label will be displayed in an error state.
    */
    error: PropTypes.bool,
    
  
    /**
    * If `true`, the input of this label is focused.
    */
    focused: PropTypes.bool,
    
  
    /**
    * `classes` property applied to the [`FormLabel`](/api/form-label/) element.
    */
    FormLabelClasses: PropTypes.object,
    
  
    /**
    * If `dense`, will adjust vertical spacing. This is normally obtained via context from
  * FormControl.
    */
    margin: PropTypes.oneOf(['dense']),
    
  
    /**
    * @ignore
    */
    muiFormControl: PropTypes.object,
    
  
    /**
    * if `true`, the label will indicate that the input is required.
    */
    required: PropTypes.bool,
    
  
    /**
    * If `true`, the label is shrunk.
    */
    shrink: PropTypes.bool,
    
  
    /**
    * The variant to use.
    */
    variant: PropTypes.oneOf(['standard','outlined','filled']),
    
};

InputLabel.defaultProps = {
  disableAnimation: false
};

export default InputLabel;