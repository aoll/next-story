import React from 'react';
import PropTypes from 'prop-types';
import { Tabs as MaterialTabs } from '@material-ui/core';

const Tabs = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTabs {...defaultProps}>
      {children}
    </MaterialTabs>
  );
};

Tabs.propTypes = {
  
    /**
    * Callback fired when the component mounts.
  * This is useful when you want to trigger an action programmatically.
  * It currently only supports `updateIndicator()` action.
  * 
  * @param {object} actions This object contains all possible actions
  * that can be triggered programmatically.
    */
    action: PropTypes.func,
    
  
    /**
    * If `true`, the tabs will be centered.
  * This property is intended for large views.
    */
    centered: PropTypes.bool,
    
  
    /**
    * The content of the component.
    */
    children: PropTypes.node,
    
  
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
    * If `true`, the tabs will grow to use all the available space.
  * This property is intended for small views, like on mobile.
    */
    fullWidth: PropTypes.custom,
    
  
    /**
    * Determines the color of the indicator.
    */
    indicatorColor: PropTypes.oneOf(['secondary','primary']),
    
  
    /**
    * Callback fired when the value changes.
  * 
  * @param {object} event The event source of the callback
  * @param {number} value We default to the index of the child
    */
    onChange: PropTypes.func,
    
  
    /**
    * If `true`, it will invoke scrolling properties and allow for horizontally
  * scrolling (or swiping) of the tab bar.
    */
    scrollable: PropTypes.custom,
    
  
    /**
    * The component used to render the scroll buttons.
    */
    ScrollButtonComponent: PropTypes.custom,
    
  
    /**
    * Determine behavior of scroll buttons when tabs are set to scroll
  * `auto` will only present them on medium and larger viewports
  * `on` will always present them
  * `off` will never present them
    */
    scrollButtons: PropTypes.oneOf(['auto','on','off']),
    
  
    /**
    * Properties applied to the `TabIndicator` element.
    */
    TabIndicatorProps: PropTypes.object,
    
  
    /**
    * Determines the color of the `Tab`.
    */
    textColor: PropTypes.oneOf(['secondary','primary','inherit']),
    
  
    /**
    * @ignore
    */
    theme: PropTypes.object.isRequired,
    
  
    /**
    * The value of the currently selected `Tab`.
  * If you don't want any selected `Tab`, you can set this property to `false`.
    */
    value: PropTypes.any,
    
  
    /**
    * Determines additional display behavior of the tabs:
  *  - `scrollable` will invoke scrolling properties and allow for horizontally
  *  scrolling (or swiping) of the tab bar.
  *  -`fullWidth` will make the tabs grow to use all the available space,
  *  which should be used for small views, like on mobile.
  *  - `standard` will render the default state.
    */
    variant: PropTypes.oneOf(['standard','scrollable','fullWidth']),
    
};

Tabs.defaultProps = {
  centered: false,
  indicatorColor: 'secondary',
  scrollButtons: 'auto',
  textColor: 'inherit',
  variant: 'standard'
};

export default Tabs;