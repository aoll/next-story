import React from 'react';
import PropTypes from 'prop-types';
import { Popper as MaterialPopper } from '@material-ui/core';

const Popper = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialPopper {...defaultProps}>
      {children}
    </MaterialPopper>
  );
};

Popper.propTypes = {
  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: PropTypes.bool,
  /**
   * Always keep the children in the DOM.
   * This property can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   */
  keepMounted: PropTypes.bool,
  /**
   * If `true`, the popper is visible.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Popper placement.
   */
  placement: PropTypes.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * Help supporting a react-transition-group/Transition component.
   */
  transition: PropTypes.bool,
};

Popper.defaultProps = {
  disablePortal: false,
  placement: 'bottom',
  transition: false
};

export default Popper;
