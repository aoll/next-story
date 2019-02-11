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
    * Can be a `StepLabel` or a node to place inside `StepLabel` as children.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
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
    * The icon displayed by the step label.
    */
    icon: PropTypes.node,
    
  
    /**
    * @ignore
    */
    last: PropTypes.bool,
    
  
    /**
    * The optional node to display.
    */
    optional: PropTypes.node,
    
  
    /**
    * @ignore
    */
    orientation: PropTypes.oneOf(['horizontal','vertical']),
    
};

StepButton.defaultProps = {
  
};

export default StepButton;