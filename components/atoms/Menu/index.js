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
    * The DOM element used to set the position of the menu.
    */
    anchorEl: PropTypes.union,
    
  
    /**
    * Menu contents, normally `MenuItem`s.
    */
    children: PropTypes.node,
    
  
    /**
    * If `true`, the selected / first menu item will not be auto focused.
    */
    disableAutoFocusItem: PropTypes.bool,
    
  
    /**
    * Properties applied to the [`MenuList`](/api/menu-list/) element.
    */
    MenuListProps: PropTypes.object,
    
  
    /**
    * Callback fired when the component requests to be closed.
  * 
  * @param {object} event The event source of the callback
  * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`
    */
    onClose: PropTypes.func,
    
  
    /**
    * Callback fired before the Menu enters.
    */
    onEnter: PropTypes.func,
    
  
    /**
    * Callback fired when the Menu has entered.
    */
    onEntered: PropTypes.func,
    
  
    /**
    * Callback fired when the Menu is entering.
    */
    onEntering: PropTypes.func,
    
  
    /**
    * Callback fired before the Menu exits.
    */
    onExit: PropTypes.func,
    
  
    /**
    * Callback fired when the Menu has exited.
    */
    onExited: PropTypes.func,
    
  
    /**
    * Callback fired when the Menu is exiting.
    */
    onExiting: PropTypes.func,
    
  
    /**
    * If `true`, the menu is visible.
    */
    open: PropTypes.bool.isRequired,
    
  
    /**
    * @ignore
    */
    PaperProps: PropTypes.object,
    
  
    /**
    * `classes` property applied to the [`Popover`](/api/popover/) element.
    */
    PopoverClasses: PropTypes.object,
    
  
    /**
    * @ignore
    */
    theme: PropTypes.object.isRequired,
    
  
    /**
    * The length of the transition in `ms`, or 'auto'
    */
    transitionDuration: PropTypes.union,
    
};

Menu.defaultProps = {
  disableAutoFocusItem: false,
  transitionDuration: 'auto'
};

export default Menu;