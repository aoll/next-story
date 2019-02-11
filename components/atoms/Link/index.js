import React from 'react';
import PropTypes from 'prop-types';
import { Link as MaterialLink } from '@material-ui/core';

const Link = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialLink {...defaultProps}>
      {children}
    </MaterialLink>
  );
};

Link.propTypes = {
  
    /**
    * Controls whether the link is inline or not. When `block` is true the link is not inline
  *  when `block` is false it is.
    */
    block: PropTypes.bool,
    
  
    /**
    * The content of the link.
    */
    children: PropTypes.node.isRequired,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The color of the link.
    */
    color: PropTypes.oneOf(['error','inherit','primary','secondary','textPrimary','textSecondary']),
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
    */
    component: PropTypes.element,
    
  
    /**
    * `classes` property applied to the [`Typography`](/api/typography/) element.
    */
    TypographyClasses: PropTypes.object,
    
  
    /**
    * Controls when the link should have an underline.
    */
    underline: PropTypes.oneOf(['none','hover','always']),
    
  
    /**
    * Applies the theme typography styles.
    */
    variant: PropTypes.string,
    
};

Link.defaultProps = {
  block: false,
  color: 'primary',
  underline: 'hover',
  variant: 'inherit'
};

export default Link;