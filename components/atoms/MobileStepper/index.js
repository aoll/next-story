import React from 'react';
import PropTypes from 'prop-types';
import { MobileStepper as MaterialMobileStepper } from '@material-ui/core';

const MobileStepper = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialMobileStepper {...defaultProps}>
      {children}
    </MaterialMobileStepper>
  );
};

MobileStepper.propTypes = {
  /**
   * Set the active step (zero based index).
   * Defines which dot is highlighted when the variant is 'dots'.
   */
  activeStep: PropTypes.number,
  /**
   * Set the positioning type.
   */
  position: PropTypes.oneOf(['bottom', 'top', 'static']),
  /**
   * The total steps.
   */
  steps: PropTypes.number.isRequired,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['text', 'dots', 'progress']),
};

MobileStepper.defaultProps = {
  activeStep: 0,
  position: 'bottom',
  variant: 'dots'
};

export default MobileStepper;