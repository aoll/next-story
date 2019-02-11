import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar as MaterialSnackbar } from '@material-ui/core';

const Snackbar = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialSnackbar {...defaultProps}>
      {children}
    </MaterialSnackbar>
  );
};

Snackbar.propTypes = {
  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   */
  autoHideDuration: PropTypes.number,
  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   */
  disableWindowBlurListener: PropTypes.bool,
  /**
   * If true, `Snackbar` is open.
   */
  open: PropTypes.bool,
  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` property isn't specified, it does nothing.
   * If `autoHideDuration` property is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: PropTypes.number,
};

Snackbar.defaultProps = {
  disableWindowBlurListener: false
};

export default Snackbar;