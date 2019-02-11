import React from 'react';
import PropTypes from 'prop-types';
import { StepContent as MaterialStepContent } from '@material-ui/core';

const StepContent = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialStepContent {...defaultProps}>
      {children}
    </MaterialStepContent>
  );
};

StepContent.propTypes = {
  /**
   * @ignore
   * Expands the content.
   */
  active: PropTypes.bool,
  /**
   * @ignore
   * Set internally by Step when it's supplied with the alternativeLabel property.
   */
  alternativeLabel: PropTypes.bool,
  /**
   * @ignore
   */
  completed: PropTypes.bool,
  /**
   * @ignore
   */
  last: PropTypes.bool,
  /**
   * @ignore
   * Set internally by Step when it's supplied with the optional property.
   */
  optional: PropTypes.bool,
  /**
   * @ignore
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

StepContent.defaultProps = {
  
};

export default StepContent;