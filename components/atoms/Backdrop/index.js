import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop as MaterialBackdrop } from '@material-ui/core';

const Backdrop = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialBackdrop {...defaultProps}>
      {children}
    </MaterialBackdrop>
  );
};

Backdrop.propTypes = {
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * If `true`, the backdrop is invisible.
  * It can be used when rendering a popover or a custom select component.
    */
    invisible: PropTypes.bool,
    
  
    /**
    * If `true`, the backdrop is open.
    */
    open: PropTypes.bool.isRequired,
    
  
    /**
    * The duration for the transition, in milliseconds.
  * You may specify a single timeout for all transitions, or individually with an object.
    */
    transitionDuration: PropTypes.union,
    
};

Backdrop.defaultProps = {
  invisible: false
};

export default Backdrop;