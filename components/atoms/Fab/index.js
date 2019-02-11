import React from 'react';
import PropTypes from 'prop-types';
import { Fab as MaterialFab } from '@material-ui/core';

const Fab = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialFab {...defaultProps}>
      {children}
    </MaterialFab>
  );
};

Fab.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node.isRequired,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: PropTypes.string,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['round', 'extended']),
};

Fab.defaultProps = {
  color: 'default',
  disabled: false,
  disableFocusRipple: false,
  size: 'large',
  variant: 'round'
};

export default Fab;