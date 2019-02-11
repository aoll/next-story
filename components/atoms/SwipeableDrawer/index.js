import React from 'react';
import PropTypes from 'prop-types';
import { SwipeableDrawer as MaterialSwipeableDrawer } from '@material-ui/core';

const SwipeableDrawer = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialSwipeableDrawer {...defaultProps}>
      {children}
    </MaterialSwipeableDrawer>
  );
};

SwipeableDrawer.propTypes = {
  /**
   * @ignore
   */
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  /**
   * Disable the backdrop transition.
   * This can improve the FPS on low-end devices.
   */
  disableBackdropTransition: PropTypes.bool,
  /**
   * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit
   * to promote accidental discovery of the swipe gesture.
   */
  disableDiscovery: PropTypes.bool,
  /**
   * If `true`, swipe to open is disabled. This is useful in browsers where swiping triggers
   * navigation actions. Swipe to open is disabled on iOS browsers by default.
   */
  disableSwipeToOpen: PropTypes.bool,
  /**
   * @ignore
   */
  hideBackdrop: PropTypes.bool,
  /**
   * Affects how far the drawer must be opened/closed to change his state.
   * Specified as percent (0-1) of the width of the drawer
   */
  hysteresis: PropTypes.number,
  /**
   * Defines, from which (average) velocity on, the swipe is
   * defined as complete although hysteresis isn't reached.
   * Good threshold is between 250 - 1000 px/s
   */
  minFlingVelocity: PropTypes.number,
  /**
   * Callback fired when the component requests to be closed.
   * 
   * @param {object} event The event source of the callback
   */
  onClose: PropTypes.func.isRequired,
  /**
   * Callback fired when the component requests to be opened.
   * 
   * @param {object} event The event source of the callback
   */
  onOpen: PropTypes.func.isRequired,
  /**
   * If `true`, the drawer is open.
   */
  open: PropTypes.bool.isRequired,
  /**
   * The width of the left most (or right most) area in pixels where the
   * drawer can be swiped open from.
   */
  swipeAreaWidth: PropTypes.number,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  variant: PropTypes.oneOf(['permanent', 'persistent', 'temporary']),
};

SwipeableDrawer.defaultProps = {
  anchor: 'left',
  disableBackdropTransition: false,
  disableDiscovery: false,
  disableSwipeToOpen: typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent),
  hysteresis: 0.55,
  minFlingVelocity: 400,
  swipeAreaWidth: 20,
  variant: 'temporary'
};

export default SwipeableDrawer;