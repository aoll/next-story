import React from 'react';
import PropTypes from 'prop-types';
import { ListItem as MaterialListItem } from '@material-ui/core';

const ListItem = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialListItem {...defaultProps}>
      {children}
    </MaterialListItem>
  );
};

ListItem.propTypes = {
  
    /**
    * Defines the `align-items` style property.
    */
    alignItems: PropTypes.oneOf(['flex-start','center']),
    
  
    /**
    * If `true`, the list item will be a button (using `ButtonBase`).
    */
    button: PropTypes.bool,
    
  
    /**
    * The content of the component. If a `ListItemSecondaryAction` is used it must
  * be the last child.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
  * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
    */
    component: PropTypes.element,
    
  
    /**
    * The container component used when a `ListItemSecondaryAction` is the last child.
    */
    ContainerComponent: PropTypes.custom,
    
  
    /**
    * Properties applied to the container component if used.
    */
    ContainerProps: PropTypes.object,
    
  
    /**
    * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
    */
    dense: PropTypes.bool,
    
  
    /**
    * If `true`, the list item will be disabled.
    */
    disabled: PropTypes.bool,
    
  
    /**
    * If `true`, the left and right padding is removed.
    */
    disableGutters: PropTypes.bool,
    
  
    /**
    * If `true`, a 1px light border is added to the bottom of the list item.
    */
    divider: PropTypes.bool,
    
  
    /**
    * @ignore
    */
    focusVisibleClassName: PropTypes.string,
    
  
    /**
    * Use to apply selected styling.
    */
    selected: PropTypes.bool,
    
};

ListItem.defaultProps = {
  alignItems: 'center',
  button: false,
  ContainerComponent: 'li',
  dense: false,
  disabled: false,
  disableGutters: false,
  divider: false,
  selected: false
};

export default ListItem;