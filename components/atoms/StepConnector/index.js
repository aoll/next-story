import React from 'react';
import PropTypes from 'prop-types';
import { StepConnector as MaterialStepConnector } from '@material-ui/core';

const StepConnector = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialStepConnector {...defaultProps}>
      {children}
    </MaterialStepConnector>
  );
};

StepConnector.propTypes = {
  
    /**
    * @ignore
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
    className: PropTypes.string,
    
  
    /**
    * @ignore
    */
    completed: PropTypes.bool,
    
  
    /**
    * @ignore
    */
    disabled: PropTypes.bool,
    
  
    /**
    * @ignore
    */
    index: PropTypes.number,
    
  
    /**
    * @ignore
    */
    orientation: PropTypes.oneOf(['horizontal','vertical']),
    
};

StepConnector.defaultProps = {
  alternativeLabel: false,
  orientation: 'horizontal'
};

export default StepConnector;