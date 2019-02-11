import React from 'react';
import PropTypes from 'prop-types';
import { BottomNavigationAction as MaterialBottomNavigationAction } from '@material-ui/core';

const BottomNavigationAction = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialBottomNavigationAction {...defaultProps}>
      {children}
    </MaterialBottomNavigationAction>
  );
};

BottomNavigationAction.propTypes = {
  /**
   * @ignore
   */
  selected: PropTypes.bool,
  /**
   * If `true`, the `BottomNavigationAction` will show its label.
   * By default, only the selected `BottomNavigationAction`
   * inside `BottomNavigation` will show its label.
   */
  showLabel: PropTypes.bool,
};

BottomNavigationAction.defaultProps = {
  
};

export default BottomNavigationAction;