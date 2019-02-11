import React from 'react';
import PropTypes from 'prop-types';
import { Step as MaterialStep } from '@material-ui/core';

const Step = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialStep {...defaultProps}>
      {children}
    </MaterialStep>
  );
};

Step.propTypes = {
  
    /**
    * Sets the step as active. Is passed to child components.
    */
    active: PropTypes.bool,
    
  
    /**
    * @ignore
  * Set internally by Stepper when it's supplied with the alternativeLabel property.
    */
    alternativeLabel: PropTypes.bool,
    
  
    /**
    * Should be `Step` sub-components such as `StepLabel`, `StepContent`.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * Mark the step as completed. Is passed to child components.
    */
    completed: PropTypes.bool,
    
  
    /**
    * @ignore
  * Passed down from Stepper if alternativeLabel is also set.
    */
    connector: PropTypes.element,
    
  
    /**
    * Mark the step as disabled, will also disable the button if
  * `StepButton` is a child of `Step`. Is passed to child components.
    */
    disabled: PropTypes.bool,
    
  
    /**
    * @ignore
  * Used internally for numbering.
    */
    index: PropTypes.number,
    
  
    /**
    * @ignore
    */
    last: PropTypes.bool,
    
  
    /**
    * @ignore
    */
    orientation: PropTypes.oneOf(['horizontal','vertical']),
    
};

Step.defaultProps = {
  active: false,
  completed: false,
  disabled: false
};

export default Step;