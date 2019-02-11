import React from 'react';
import PropTypes from 'prop-types';
import { BottomNavigation as MaterialBottomNavigation } from '@material-ui/core';

const BottomNavigation = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialBottomNavigation {...defaultProps}>
      {children}
    </MaterialBottomNavigation>
  );
};

BottomNavigation.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * If `true`, all `BottomNavigationAction`s will show their labels.
   * By default, only the selected `BottomNavigationAction` will show its label.
   */
  showLabels: PropTypes.bool,
};

BottomNavigation.defaultProps = {
  showLabels: false
};

export default BottomNavigation;