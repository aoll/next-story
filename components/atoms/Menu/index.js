import React from 'react';
import PropTypes from 'prop-types';
import { Menu as MaterialMenu } from '@material-ui/core';

const Menu = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialMenu {...defaultProps}>
      {children}
    </MaterialMenu>
  );
};

Menu.propTypes = {
  /**
   * If `true`, the selected / first menu item will not be auto focused.
   */
  disableAutoFocusItem: PropTypes.bool,
  /**
   * If `true`, the menu is visible.
   */
  open: PropTypes.bool.isRequired,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
};

Menu.defaultProps = {
  disableAutoFocusItem: false
};

export default Menu;