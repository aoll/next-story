import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as MaterialDialog } from '@material-ui/core';

const Dialog = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialDialog {...defaultProps}>
      {children}
    </MaterialDialog>
  );
};

Dialog.propTypes = {
  /**
   * Dialog children, usually the included sub-components.
   */
  children: PropTypes.node.isRequired,
  /**
   * If `true`, clicking the backdrop will not fire the `onClose` callback.
   */
  disableBackdropClick: PropTypes.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   */
  disableEscapeKeyDown: PropTypes.bool,
  /**
   * If `true`, the dialog will be full-screen
   */
  fullScreen: PropTypes.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   */
  fullWidth: PropTypes.bool,
  /**
   * Determine the max width of the dialog.
   * The dialog width grows with the size of the screen, this property is useful
   * on the desktop where you might need some coherent different width size across your
   * application. Set to `false` to disable `maxWidth`.
   */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl',false]),
  /**
   * If `true`, the Dialog is open.
   */
  open: PropTypes.bool.isRequired,
  /**
   * Determine the container for scrolling the dialog.
   */
  scroll: PropTypes.oneOf(['body', 'paper']),
};

Dialog.defaultProps = {
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  fullScreen: false,
  fullWidth: false,
  maxWidth: 'sm',
  scroll: 'paper'
};

export default Dialog;