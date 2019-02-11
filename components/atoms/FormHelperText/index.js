import React from 'react';
import PropTypes from 'prop-types';
import { FormHelperText as MaterialFormHelperText } from '@material-ui/core';

const FormHelperText = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialFormHelperText {...defaultProps}>
      {children}
    </MaterialFormHelperText>
  );
};

FormHelperText.propTypes = {
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: PropTypes.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: PropTypes.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: PropTypes.oneOf(['dense']),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: PropTypes.bool,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

FormHelperText.defaultProps = {
  
};

export default FormHelperText;