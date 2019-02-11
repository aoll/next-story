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
    * MenuList contents, normally `MenuItem`s.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * If `true`, the menu items will not wrap focus.
    */
    disableListWrap: PropTypes.bool,
    
  
    /**
    * @ignore
    */
    onBlur: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onKeyDown: PropTypes.func,
    
};

MenuList.defaultProps = {
  disableListWrap: false
};

export default MenuList;