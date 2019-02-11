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
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: PropTypes.bool,
  /**
   * If `true`, the backdrop is open.
   */
  open: PropTypes.bool.isRequired,
};

Backdrop.defaultProps = {
  invisible: false
};

export default Backdrop;