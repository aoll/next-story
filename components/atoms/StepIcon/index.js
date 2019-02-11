import React from 'react';
import PropTypes from 'prop-types';
import { StepIcon as MaterialStepIcon } from '@material-ui/core';

const StepIcon = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialStepIcon {...defaultProps}>
      {children}
    </MaterialStepIcon>
  );
};

StepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * Mark the step as failed.
   */
  error: PropTypes.bool,
  /**
   * The icon displayed by the step label.
   */
  icon: PropTypes.node.isRequired,
};

StepIcon.defaultProps = {
  active: false,
  completed: false,
  error: false
};

export default StepIcon;