import React from 'react';
import PropTypes from 'prop-types';
import { Badge as MaterialBadge } from '@material-ui/core';

const Badge = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialBadge {...defaultProps}>
      {children}
    </MaterialBadge>
  );
};

Badge.propTypes = {
  
    /**
    * The content rendered within the badge.
    */
    badgeContent: PropTypes.node,
    
  
    /**
    * The badge will be added relative to this node.
    */
    children: PropTypes.node.isRequired,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The color of the component. It supports those theme colors that make sense for this component.
    */
    color: PropTypes.oneOf(['default','primary','secondary','error']),
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
    */
    component: PropTypes.element,
    
  
    /**
    * If `true`, the badge will be invisible.
    */
    invisible: PropTypes.bool,
    
  
    /**
    * Max count to show.
    */
    max: PropTypes.number,
    
  
    /**
    * Controls whether the badge is hidden when `badgeContent` is zero.
    */
    showZero: PropTypes.bool,
    
  
    /**
    * The variant to use.
    */
    variant: PropTypes.oneOf(['standard','dot']),
    
};

Badge.defaultProps = {
  color: 'default',
  max: 99,
  showZero: false,
  variant: 'standard'
};

export default Badge;