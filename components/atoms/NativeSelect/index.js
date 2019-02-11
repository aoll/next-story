import React from 'react';
import PropTypes from 'prop-types';
import { NativeSelect as MaterialNativeSelect } from '@material-ui/core';

const NativeSelect = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialNativeSelect {...defaultProps}>
      {children}
    </MaterialNativeSelect>
  );
};

NativeSelect.propTypes = {
  
    /**
    * The option elements to populate the select with.
  * Can be some `<option>` elements.
    */
    children: PropTypes.node,
    
  
    /**
    * The icon that displays the arrow.
    */
    IconComponent: PropTypes.element,
    
  
    /**
    * An `Input` element; does not have to be a material-ui specific `Input`.
    */
    input: PropTypes.element,
    
  
    /**
    * Attributes applied to the `select` element.
    */
    inputProps: PropTypes.object,
    
  
    /**
    * @ignore
    */
    muiFormControl: PropTypes.object,
    
  
    /**
    * Callback function fired when a menu item is selected.
  * 
  * @param {object} event The event source of the callback.
  * You can pull out the new value by accessing `event.target.value`.
    */
    onChange: PropTypes.func,
    
  
    /**
    * The input value.
    */
    value: PropTypes.union,
    
  
    /**
    * The variant to use.
    */
    variant: PropTypes.oneOf(['standard','outlined','filled']),
    
};

NativeSelect.defaultProps = {
  
};

export default NativeSelect;