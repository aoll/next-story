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
    * Step content.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
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
    orientation: PropTypes.oneOf(['horizontal','vertical']),
    
  
    /**
    * The component used for the transition.
    */
    TransitionComponent: PropTypes.element,
    
  
    /**
    * Adjust the duration of the content expand transition.
  * Passed as a property to the transition component.
  * 
  * Set to 'auto' to automatically calculate transition time based on height.
    */
    transitionDuration: PropTypes.union,
    
  
    /**
    * Properties applied to the `Transition` element.
    */
    TransitionProps: PropTypes.object,
    
};

StepContent.defaultProps = {
  transitionDuration: 'auto'
};

export default StepContent;