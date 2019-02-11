import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem as MaterialMenuItem } from '@material-ui/core';

const MenuItem = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialMenuItem {...defaultProps}>
      {children}
    </MaterialMenuItem>
  );
};

MenuItem.propTypes = {
  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: PropTypes.bool,
  /**
   * @ignore
   */
  role: PropTypes.string,
  /**
   * @ignore
   */
  selected: PropTypes.bool,
};

MenuItem.defaultProps = {
  disableGutters: false,
  role: 'menuitem'
};

export default MenuItem;