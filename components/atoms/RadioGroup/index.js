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
   * The name used to reference the value of the control.
   */
  name: PropTypes.string,
};

RadioGroup.defaultProps = {
  
};

export default RadioGroup;