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
    * A back button element. For instance, it can be a `Button` or an `IconButton`.
    */
    backButton: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * Properties applied to the `LinearProgress` element.
    */
    LinearProgressProps: PropTypes.object,
    
  
    /**
    * A next button element. For instance, it can be a `Button` or an `IconButton`.
    */
    nextButton: PropTypes.node,
    
  
    /**
    * Set the positioning type.
    */
    position: PropTypes.oneOf(['bottom','top','static']),
    
  
    /**
    * The total steps.
    */
    steps: PropTypes.number.isRequired,
    
  
    /**
    * The variant to use.
    */
    variant: PropTypes.oneOf(['text','dots','progress']),
    
};

MobileStepper.defaultProps = {
  activeStep: 0,
  position: 'bottom',
  variant: 'dots'
};

export default MobileStepper;