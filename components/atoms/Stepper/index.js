import React from 'react';
import PropTypes from 'prop-types';
import { Stepper as MaterialStepper } from '@material-ui/core';

const Stepper = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialStepper {...defaultProps}>
      {children}
    </MaterialStepper>
  );
};

Stepper.propTypes = {
  /**
   * Set the active step (zero based index).
   */
  activeStep: PropTypes.number,
  /**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   */
  alternativeLabel: PropTypes.bool,
  /**
   * Two or more `<Step />` components.
   */
  children: PropTypes.node.isRequired,
  /**
   * If set the `Stepper` will not assist in controlling steps for linear flow.
   */
  nonLinear: PropTypes.bool,
  /**
   * The stepper orientation (layout flow direction).
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

Stepper.defaultProps = {
  activeStep: 0,
  alternativeLabel: false,
  nonLinear: false,
  orientation: 'horizontal'
};

export default Stepper;