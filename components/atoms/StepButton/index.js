import React from 'react';
import PropTypes from 'prop-types';
import { StepButton as MaterialStepButton } from '@material-ui/core';

const StepButton = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialStepButton {...defaultProps}>
      {children}
    </MaterialStepButton>
  );
};

StepButton.propTypes = {
  /**
   * @ignore
   * Passed in via `Step` - passed through to `StepLabel`.
   */
  active: PropTypes.bool,
  /**
   * @ignore
   * Set internally by Stepper when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: PropTypes.bool,
  /**
   * @ignore
   * Sets completed styling. Is passed to StepLabel.
   */
  completed: PropTypes.bool,
  /**
   * @ignore
   * Disables the button and sets disabled styling. Is passed to StepLabel.
   */
  disabled: PropTypes.bool,
  /**
   * @ignore
   */
  last: PropTypes.bool,
  /**
   * @ignore
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

StepButton.defaultProps = {
  
};

export default StepButton;