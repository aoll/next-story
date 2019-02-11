import React from 'react';
import PropTypes from 'prop-types';
import { ClickAwayListener as MaterialClickAwayListener } from '@material-ui/core';

const ClickAwayListener = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialClickAwayListener {...defaultProps}>
      {children}
    </MaterialClickAwayListener>
  );
};

ClickAwayListener.propTypes = {
  
    /**
    * The wrapped element.
    */
    children: PropTypes.element.isRequired,
    
  
    /**
    * The mouse event to listen to. You can disable the listener by providing `false`.
    */
    mouseEvent: PropTypes.oneOf(['onClick','onMouseDown','onMouseUp',false]),
    
  
    /**
    * Callback fired when a "click away" event is detected.
    */
    onClickAway: PropTypes.func.isRequired,
    
  
    /**
    * The touch event to listen to. You can disable the listener by providing `false`.
    */
    touchEvent: PropTypes.oneOf(['onTouchStart','onTouchEnd',false]),
    
};

ClickAwayListener.defaultProps = {
  mouseEvent: 'onMouseUp',
  touchEvent: 'onTouchEnd'
};

export default ClickAwayListener;