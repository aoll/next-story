import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup as MaterialRadioGroup } from '@material-ui/core';

const RadioGroup = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialRadioGroup {...defaultProps}>
      {children}
    </MaterialRadioGroup>
  );
};

RadioGroup.propTypes = {
  
    /**
    * The content of the component.
    */
    children: PropTypes.node,
    
  
    /**
    * The default input value, useful when not controlling the component.
    */
    defaultValue: PropTypes.union,
    
  
    /**
    * The name used to reference the value of the control.
    */
    name: PropTypes.string,
    
  
    /**
    * @ignore
    */
    onBlur: PropTypes.func,
    
  
    /**
    * Callback fired when a radio button is selected.
  * 
  * @param {object} event The event source of the callback.
  * You can pull out the new value by accessing `event.target.value`.
  * @param {string} value The `value` of the selected radio button
    */
    onChange: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onKeyDown: PropTypes.func,
    
  
    /**
    * Value of the selected radio button.
    */
    value: PropTypes.union,
    
};

RadioGroup.defaultProps = {
  
};

export default RadioGroup;