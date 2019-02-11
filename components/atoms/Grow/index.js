import React from 'react';
import PropTypes from 'prop-types';
import { Grow as MaterialGrow } from '@material-ui/core';

const Grow = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialGrow {...defaultProps}>
      {children}
    </MaterialGrow>
  );
};

Grow.propTypes = {
  
    /**
    * A single child content element.
    */
    children: PropTypes.union,
    
  
    /**
    * If `true`, show the component; triggers the enter or exit animation.
    */
    in: PropTypes.bool,
    
  
    /**
    * @ignore
    */
    onEnter: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onExit: PropTypes.func,
    
  
    /**
    * @ignore
    */
    style: PropTypes.object,
    
  
    /**
    * @ignore
    */
    theme: PropTypes.object.isRequired,
    
  
    /**
    * The duration for the transition, in milliseconds.
  * You may specify a single timeout for all transitions, or individually with an object.
  * 
  * Set to 'auto' to automatically calculate transition time based on height.
    */
    timeout: PropTypes.union,
    
};

Grow.defaultProps = {
  timeout: 'auto'
};

export default Grow;