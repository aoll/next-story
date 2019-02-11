import React from 'react';
import PropTypes from 'prop-types';
import { MenuList as MaterialMenuList } from '@material-ui/core';

const MenuList = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialMenuList {...defaultProps}>
      {children}
    </MaterialMenuList>
  );
};

MenuList.propTypes = {
  /**
   * If `true`, the menu items will not wrap focus.
   */
  disableListWrap: PropTypes.bool,
};

MenuList.defaultProps = {
  disableListWrap: false
};

export default MenuList;