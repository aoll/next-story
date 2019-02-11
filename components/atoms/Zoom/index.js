import React from 'react';
import PropTypes from 'prop-types';
import { Zoom as MaterialZoom } from '@material-ui/core';

const Zoom = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialZoom {...defaultProps}>
      {children}
    </MaterialZoom>
  );
};

Zoom.propTypes = {
  
    /**
    * A single child content element.
    */
    children: PropTypes.union,
    
  
    /**
    * If `true`, the component will transition in.
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
    */
    timeout: PropTypes.union,
    
};

Zoom.defaultProps = {
  
};

export default Zoom;