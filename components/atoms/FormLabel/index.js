import React from 'react';
import PropTypes from 'prop-types';
import { FormLabel as MaterialFormLabel } from '@material-ui/core';

const FormLabel = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialFormLabel {...defaultProps}>
      {children}
    </MaterialFormLabel>
  );
};

FormLabel.propTypes = {
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: PropTypes.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: PropTypes.bool,
  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: PropTypes.bool,
};

FormLabel.defaultProps = {
  
};

export default FormLabel;