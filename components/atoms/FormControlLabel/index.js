import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel as MaterialFormControlLabel } from '@material-ui/core';

const FormControlLabel = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialFormControlLabel {...defaultProps}>
      {children}
    </MaterialFormControlLabel>
  );
};

FormControlLabel.propTypes = {
  
    /**
    * If `true`, the component appears selected.
    */
    checked: PropTypes.union,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
    */
    control: PropTypes.element,
    
  
    /**
    * If `true`, the control will be disabled.
    */
    disabled: PropTypes.bool,
    
  
    /**
    * Use that property to pass a ref callback to the native input component.
    */
    inputRef: PropTypes.union,
    
  
    /**
    * The text to be used in an enclosing label element.
    */
    label: PropTypes.node,
    
  
    /**
    * The position of the label.
    */
    labelPlacement: PropTypes.oneOf(['end','start','top','bottom']),
    
  
    /**
    * @ignore
    */
    muiFormControl: PropTypes.object,
    
  
    /**
    * 
    */
    name: PropTypes.string,
    
  
    /**
    * Callback fired when the state is changed.
  * 
  * @param {object} event The event source of the callback.
  * You can pull out the new value by accessing `event.target.checked`.
  * @param {boolean} checked The `checked` value of the switch
    */
    onChange: PropTypes.func,
    
  
    /**
    * The value of the component.
    */
    value: PropTypes.string,
    
};

FormControlLabel.defaultProps = {
  labelPlacement: 'end'
};

export default FormControlLabel;