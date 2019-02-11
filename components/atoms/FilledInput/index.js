import React from 'react';
import PropTypes from 'prop-types';
import { FilledInput as MaterialFilledInput } from '@material-ui/core';

const FilledInput = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialFilledInput {...defaultProps}>
      {children}
    </MaterialFilledInput>
  );
};

FilledInput.propTypes = {
  
    /**
    * This property helps users to fill forms faster, especially on mobile devices.
  * The name can be confusing, as it's more like an autofill.
  * You can learn more about it here:
  * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
    */
    autoComplete: PropTypes.string,
    
  
    /**
    * If `true`, the input will be focused during the first mount.
    */
    autoFocus: PropTypes.bool,
    
  
    /**
    * The CSS class name of the wrapper element.
    */
    className: PropTypes.string,
    
  
    /**
    * The default input value, useful when not controlling the component.
    */
    defaultValue: PropTypes.union,
    
  
    /**
    * If `true`, the input will be disabled.
    */
    disabled: PropTypes.bool,
    
  
    /**
    * If `true`, the input will not have an underline.
    */
    disableUnderline: PropTypes.bool,
    
  
    /**
    * End `InputAdornment` for this component.
    */
    endAdornment: PropTypes.node,
    
  
    /**
    * If `true`, the input will indicate an error. This is normally obtained via context from
  * FormControl.
    */
    error: PropTypes.bool,
    
  
    /**
    * If `true`, the input will take up the full width of its container.
    */
    fullWidth: PropTypes.bool,
    
  
    /**
    * The id of the `input` element.
    */
    id: PropTypes.string,
    
  
    /**
    * The component used for the native input.
  * Either a string to use a DOM element or a component.
    */
    inputComponent: PropTypes.element,
    
  
    /**
    * Attributes applied to the `input` element.
    */
    inputProps: PropTypes.object,
    
  
    /**
    * Use that property to pass a ref callback to the native input component.
    */
    inputRef: PropTypes.union,
    
  
    /**
    * If `dense`, will adjust vertical spacing. This is normally obtained via context from
  * FormControl.
    */
    margin: PropTypes.oneOf(['dense','none']),
    
  
    /**
    * If `true`, a textarea element will be rendered.
    */
    multiline: PropTypes.bool,
    
  
    /**
    * Name attribute of the `input` element.
    */
    name: PropTypes.string,
    
  
    /**
    * Callback fired when the value is changed.
  * 
  * @param {object} event The event source of the callback.
  * You can pull out the new value by accessing `event.target.value`.
    */
    onChange: PropTypes.func,
    
  
    /**
    * The short hint displayed in the input before the user enters a value.
    */
    placeholder: PropTypes.string,
    
  
    /**
    * It prevents the user from changing the value of the field
  * (not from interacting with the field).
    */
    readOnly: PropTypes.bool,
    
  
    /**
    * If `true`, the input will be required.
    */
    required: PropTypes.bool,
    
  
    /**
    * Number of rows to display when multiline option is set to true.
    */
    rows: PropTypes.union,
    
  
    /**
    * Maximum number of rows to display when multiline option is set to true.
    */
    rowsMax: PropTypes.union,
    
  
    /**
    * Start `InputAdornment` for this component.
    */
    startAdornment: PropTypes.node,
    
  
    /**
    * Type of the input element. It should be a valid HTML5 input type.
    */
    type: PropTypes.string,
    
  
    /**
    * The input value, required for a controlled component.
    */
    value: PropTypes.union,
    
};

FilledInput.defaultProps = {
  
};

export default FilledInput;