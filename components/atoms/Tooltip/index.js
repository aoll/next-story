import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip as MaterialTooltip } from '@material-ui/core';

const Tooltip = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTooltip {...defaultProps}>
      {children}
    </MaterialTooltip>
  );
};

Tooltip.propTypes = {
  /**
   * Tooltip reference element.
   */
  children: PropTypes.element.isRequired,
  /**
   * Do not respond to focus events.
   */
  disableFocusListener: PropTypes.bool,
  /**
   * Do not respond to hover events.
   */
  disableHoverListener: PropTypes.bool,
  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener: PropTypes.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This property won't impact the enter touch delay (`enterTouchDelay`).
   */
  enterDelay: PropTypes.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay: PropTypes.number,
  /**
   * The relationship between the tooltip and the wrapper component is not clear from the DOM.
   * This property is used with aria-describedby to solve the accessibility issue.
   * If you don't provide this property. It falls back to a randomly generated id.
   */
  id: PropTypes.string,
  /**
   * Makes a tooltip interactive, i.e. will not close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   */
  interactive: PropTypes.bool,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This property won't impact the leave touch delay (`leaveTouchDelay`).
   */
  leaveDelay: PropTypes.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   */
  leaveTouchDelay: PropTypes.number,
  /**
   * If `true`, the tooltip is shown.
   */
  open: PropTypes.bool,
  /**
   * Tooltip placement.
   */
  placement: PropTypes.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  disableFocusListener: false,
  disableHoverListener: false,
  disableTouchListener: false,
  enterDelay: 0,
  enterTouchDelay: 1000,
  interactive: false,
  leaveDelay: 0,
  leaveTouchDelay: 1500,
  placement: 'bottom'
};

export default Tooltip;