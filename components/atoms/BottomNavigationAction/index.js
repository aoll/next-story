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
    * This property isn't supported.
  * Use the `component` property if you need to change the children structure.
    */
    children: PropTypes.custom,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The icon element.
    */
    icon: PropTypes.node,
    
  
    /**
    * The label element.
    */
    label: PropTypes.node,
    
  
    /**
    * @ignore
    */
    onChange: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onClick: PropTypes.func,
    
  
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
    
  
    /**
    * You can provide your own value. Otherwise, we fallback to the child position index.
    */
    value: PropTypes.any,
    
};

BottomNavigationAction.defaultProps = {
  
};

export default BottomNavigationAction;