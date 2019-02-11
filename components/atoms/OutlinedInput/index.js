import React from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput as MaterialOutlinedInput } from '@material-ui/core';

const OutlinedInput = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialOutlinedInput {...defaultProps}>
      {children}
    </MaterialOutlinedInput>
  );
};

OutlinedInput.propTypes = {
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
   * If `true`, the input will be disabled.
   */
  disabled: PropTypes.bool,
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
   * The width of the legend.
   */
  labelWidth: PropTypes.number.isRequired,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(['dense', 'none']),
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: PropTypes.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: PropTypes.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: PropTypes.bool,
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
};

OutlinedInput.defaultProps = {
  
};

export default OutlinedInput;