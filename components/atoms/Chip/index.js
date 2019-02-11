import React from 'react';
import PropTypes from 'prop-types';
import { Chip as MaterialChip } from '@material-ui/core';

const Chip = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialChip {...defaultProps}>
      {children}
    </MaterialChip>
  );
};

Chip.propTypes = {
  
    /**
    * Avatar element.
    */
    avatar: PropTypes.element,
    
  
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
    * If true, the chip will appear clickable, and will raise when pressed,
  * even if the onClick property is not defined.
  * If false, the chip will not be clickable, even if onClick property is defined.
  * This can be used, for example,
  * along with the component property to indicate an anchor Chip is clickable.
    */
    clickable: PropTypes.bool,
    
  
    /**
    * The color of the component. It supports those theme colors that make sense for this component.
    */
    color: PropTypes.oneOf(['default','primary','secondary']),
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
    */
    component: PropTypes.element,
    
  
    /**
    * Override the default delete icon element. Shown only if `onDelete` is set.
    */
    deleteIcon: PropTypes.element,
    
  
    /**
    * Icon element.
    */
    icon: PropTypes.element,
    
  
    /**
    * The content of the label.
    */
    label: PropTypes.node,
    
  
    /**
    * @ignore
    */
    onClick: PropTypes.func,
    
  
    /**
    * Callback function fired when the delete icon is clicked.
  * If set, the delete icon will be shown.
    */
    onDelete: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onKeyDown: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onKeyUp: PropTypes.func,
    
  
    /**
    * @ignore
    */
    tabIndex: PropTypes.union,
    
  
    /**
    * The variant to use.
    */
    variant: PropTypes.oneOf(['default','outlined']),
    
};

Chip.defaultProps = {
  color: 'default',
  variant: 'default'
};

export default Chip;