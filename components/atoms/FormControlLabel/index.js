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
   * If `true`, the control will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The position of the label.
   */
  labelPlacement: PropTypes.oneOf(['end', 'start', 'top', 'bottom']),
  /**
   * 
   */
  name: PropTypes.string,
};

FormControlLabel.defaultProps = {
  labelPlacement: 'end'
};

export default FormControlLabel;