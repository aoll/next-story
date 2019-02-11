import React from 'react';
import PropTypes from 'prop-types';
import { TextField as MaterialTextField } from '@material-ui/core';

const TextField = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTextField {...defaultProps}>
      {children}
    </MaterialTextField>
  );
};

TextField.propTypes = {
  
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
    * @ignore
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The default value of the `Input` element.
    */
    defaultValue: PropTypes.union,
    
  
    /**
    * If `true`, the input will be disabled.
    */
    disabled: PropTypes.bool,
    
  
    /**
    * If `true`, the label will be displayed in an error state.
    */
    error: PropTypes.bool,
    
  
    /**
    * Properties applied to the [`FormHelperText`](/api/form-helper-text/) element.
    */
    FormHelperTextProps: PropTypes.object,
    
  
    /**
    * If `true`, the input will take up the full width of its container.
    */
    fullWidth: PropTypes.bool,
    
  
    /**
    * The helper text content.
    */
    helperText: PropTypes.node,
    
  
    /**
    * The id of the `input` element.
  * Use this property to make `label` and `helperText` accessible for screen readers.
    */
    id: PropTypes.string,
    
  
    /**
    * Properties applied to the [`InputLabel`](/api/input-label/) element.
    */
    InputLabelProps: PropTypes.object,
    
  
    /**
    * Properties applied to the `Input` element.
    */
    InputProps: PropTypes.object,
    
  
    /**
    * Attributes applied to the native `input` element.
    */
    inputProps: PropTypes.object,
    
  
    /**
    * Use this property to pass a ref callback to the native input component.
    */
    inputRef: PropTypes.union,
    
  
    /**
    * The label content.
    */
    label: PropTypes.node,
    
  
    /**
    * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
    */
    margin: PropTypes.oneOf(['none','dense','normal']),
    
  
    /**
    * If `true`, a textarea element will be rendered instead of an input.
    */
    multiline: PropTypes.bool,
    
  
    /**
    * Name attribute of the `input` element.
    */
    name: PropTypes.string,
    
  
    /**
    * @ignore
    */
    onBlur: PropTypes.func,
    
  
    /**
    * Callback fired when the value is changed.
  * 
  * @param {object} event The event source of the callback.
  * You can pull out the new value by accessing `event.target.value`.
    */
    onChange: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onFocus: PropTypes.func,
    
  
    /**
    * The short hint displayed in the input before the user enters a value.
    */
    placeholder: PropTypes.string,
    
  
    /**
    * If `true`, the label is displayed as required and the input will be required.
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
    * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
  * If this option is set you must pass the options of the select as children.
    */
    select: PropTypes.bool,
    
  
    /**
    * Properties applied to the [`Select`](/api/select/) element.
    */
    SelectProps: PropTypes.object,
    
  
    /**
    * Type attribute of the `Input` element. It should be a valid HTML5 input type.
    */
    type: PropTypes.string,
    
  
    /**
    * The value of the `Input` element, required for a controlled component.
    */
    value: PropTypes.union,
    
  
    /**
    * The variant to use.
    */
    variant: PropTypes.oneOf(['standard','outlined','filled']),
    
};

TextField.defaultProps = {
  required: false,
  select: false,
  variant: 'standard'
};

export default TextField;