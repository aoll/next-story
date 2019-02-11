import React from 'react';
import PropTypes from 'prop-types';
import { Slide as MaterialSlide } from '@material-ui/core';

const Slide = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialSlide {...defaultProps}>
      {children}
    </MaterialSlide>
  );
};

Slide.propTypes = {
  
    /**
    * A single child content element.
    */
    children: PropTypes.union,
    
  
    /**
    * Direction the child node will enter from.
    */
    direction: PropTypes.oneOf(['left','right','up','down']),
    
  
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
    onEntering: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onExit: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onExited: PropTypes.func,
    
  
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
    */
    timeout: PropTypes.union,
    
};

Slide.defaultProps = {
  direction: 'down'
};

export default Slide;