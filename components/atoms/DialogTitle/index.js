import React from 'react';
import PropTypes from 'prop-types';
import { DialogTitle as MaterialDialogTitle } from '@material-ui/core';

const DialogTitle = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialDialogTitle {...defaultProps}>
      {children}
    </MaterialDialogTitle>
  );
};

DialogTitle.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography: PropTypes.bool,
};

DialogTitle.defaultProps = {
  disableTypography: false
};

export default DialogTitle;