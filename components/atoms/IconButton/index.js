import React from 'react';
import PropTypes from 'prop-types';
import { IconButton as MaterialIconButton } from '@material-ui/core';

const IconButton = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialIconButton {...defaultProps}>
      {children}
    </MaterialIconButton>
  );
};

IconButton.propTypes = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: PropTypes.bool,
};

IconButton.defaultProps = {
  color: 'default',
  disabled: false
};

export default IconButton;