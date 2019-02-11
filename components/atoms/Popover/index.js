import React from 'react';
import PropTypes from 'prop-types';
import { Popover as MaterialPopover } from '@material-ui/core';

const Popover = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialPopover {...defaultProps}>
      {children}
    </MaterialPopover>
  );
};

Popover.propTypes = {
  /**
   * 
   */
  anchorReference: PropTypes.oneOf(['anchorEl', 'anchorPosition', 'none']),
  /**
   * The elevation of the popover.
   */
  elevation: PropTypes.number,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: PropTypes.number,
  /**
   * If `true`, the popover is visible.
   */
  open: PropTypes.bool.isRequired,
  /**
   * @ignore
   */
  role: PropTypes.string,
};

Popover.defaultProps = {
  anchorReference: 'anchorEl',
  elevation: 8,
  marginThreshold: 16
};

export default Popover;