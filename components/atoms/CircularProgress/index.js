import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress as MaterialCircularProgress } from '@material-ui/core';

const CircularProgress = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialCircularProgress {...defaultProps}>
      {children}
    </MaterialCircularProgress>
  );
};

CircularProgress.propTypes = {
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The color of the component. It supports those theme colors that make sense for this component.
    */
    color: PropTypes.oneOf(['primary','secondary','inherit']),
    
  
    /**
    * If `true`, the shrink animation is disabled.
  * This only works if variant is `indeterminate`.
    */
    disableShrink: PropTypes.bool,
    
  
    /**
    * The size of the circle.
    */
    size: PropTypes.union,
    
  
    /**
    * @ignore
    */
    style: PropTypes.object,
    
  
    /**
    * The thickness of the circle.
    */
    thickness: PropTypes.number,
    
  
    /**
    * The value of the progress indicator for the determinate and static variants.
  * Value between 0 and 100.
    */
    value: PropTypes.number,
    
  
    /**
    * The variant to use.
  * Use indeterminate when there is no progress value.
    */
    variant: PropTypes.oneOf(['determinate','indeterminate','static']),
    
};

CircularProgress.defaultProps = {
  color: 'primary',
  disableShrink: false,
  size: 40,
  thickness: 3.6,
  value: 0,
  variant: 'indeterminate'
};

export default CircularProgress;