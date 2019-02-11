import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox as MaterialCheckbox } from '@material-ui/core';

const Checkbox = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialCheckbox {...defaultProps}>
      {children}
    </MaterialCheckbox>
  );
};

Checkbox.propTypes = {
  
    /**
    * If `true`, the component is checked.
    */
    checked: PropTypes.union,
    
  
    /**
    * The icon to display when the component is checked.
    */
    checkedIcon: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
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
    * If `true`, the component appears indeterminate.
  * This does not set the native input element to indeterminate due
  * to inconsistent behavior across browsers.
  * However, we set a `data-indeterminate` attribute on the input.
    */
    indeterminate: PropTypes.bool,
    
  
    /**
    * The icon to display when the component is indeterminate.
    */
    indeterminateIcon: PropTypes.node,
    
  
    /**
    * Properties applied to the `input` element.
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
  * You can pull out the new value by accessing `event.target.checked`.
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
    value: PropTypes.string,
    
};

Checkbox.defaultProps = {
  color: 'secondary',
  indeterminate: false
};

export default Checkbox;