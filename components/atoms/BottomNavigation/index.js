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
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
    */
    component: PropTypes.element,
    
  
    /**
    * Callback fired when the value changes.
  * 
  * @param {object} event The event source of the callback
  * @param {any} value We default to the index of the child
    */
    onChange: PropTypes.func,
    
  
    /**
    * If `true`, all `BottomNavigationAction`s will show their labels.
  * By default, only the selected `BottomNavigationAction` will show its label.
    */
    showLabels: PropTypes.bool,
    
  
    /**
    * The value of the currently selected `BottomNavigationAction`.
    */
    value: PropTypes.any,
    
};

BottomNavigation.defaultProps = {
  showLabels: false
};

export default BottomNavigation;