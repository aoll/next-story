import React from 'react';
import PropTypes from 'prop-types';
import { StepLabel as MaterialStepLabel } from '@material-ui/core';

const StepLabel = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialStepLabel {...defaultProps}>
      {children}
    </MaterialStepLabel>
  );
};

StepLabel.propTypes = {
  
    /**
    * @ignore
  * Sets the step as active. Is passed to child components.
    */
    active: PropTypes.bool,
    
  
    /**
    * @ignore
  * Set internally by Stepper when it's supplied with the alternativeLabel property.
    */
    alternativeLabel: PropTypes.bool,
    
  
    /**
    * In most cases will simply be a string containing a title for the label.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * @ignore
  * Mark the step as completed. Is passed to child components.
    */
    completed: PropTypes.bool,
    
  
    /**
    * Mark the step as disabled, will also disable the button if
  * `StepLabelButton` is a child of `StepLabel`. Is passed to child components.
    */
    disabled: PropTypes.bool,
    
  
    /**
    * Mark the step as failed.
    */
    error: PropTypes.bool,
    
  
    /**
    * Override the default icon.
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
    
  
    /**
    * The component to render in place of the [`StepIcon`](/api/step-icon/).
    */
    StepIconComponent: PropTypes.element,
    
  
    /**
    * Properties applied to the [`StepIcon`](/api/step-icon/) element.
    */
    StepIconProps: PropTypes.object,
    
};

StepLabel.defaultProps = {
  active: false,
  alternativeLabel: false,
  completed: false,
  disabled: false,
  error: false,
  last: false,
  orientation: 'horizontal'
};

export default StepLabel;