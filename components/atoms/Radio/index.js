import React from 'react';
import PropTypes from 'prop-types';
import { Radio as MaterialRadio } from '@material-ui/core';

const Radio = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialRadio {...defaultProps}>
      {children}
    </MaterialRadio>
  );
};

Radio.propTypes = {
  
    /**
    * If `true`, the component is checked.
    */
    checked: PropTypes.union,
    
  
    /**
    * The icon to display when the component is checked.
    */
    checkedIcon: PropTypes.node,
    
  
    /**
    * The color of the component. It supports those theme colors that make sense for this component.
    */
    color: PropTypes.oneOf(['primary','secondary','default']),
    
  
    /**
    * If `true`, the switch will be disabled.
    */
    disabled: PropTypes.bool,
    
  
    /**
    * If `true`, the ripple effect will be disabled.
    */
    disableRipple: PropTypes.bool,
    
  
    /**
    * The icon to display when the component is unchecked.
    */
    icon: PropTypes.node,
    
  
    /**
    * The id of the `input` element.
    */
    id: PropTypes.string,
    
  
    /**
    * Attributes applied to the `input` element.
    */
    inputProps: PropTypes.object,
    
  
    /**
    * Use that property to pass a ref callback to the native input component.
    */
    inputRef: PropTypes.union,
    
  
    /**
    * Callback fired when the state is changed.
  * 
  * @param {object} event The event source of the callback.
  * You can pull out the new value by accessing `event.target.value`.
  * @param {boolean} checked The `checked` value of the switch
    */
    onChange: PropTypes.func,
    
  
    /**
    * The input component property `type`.
    */
    type: PropTypes.string,
    
  
    /**
    * The value of the component.
    */
    value: PropTypes.union,
    
};

Radio.defaultProps = {
  color: 'secondary'
};

export default Radio;