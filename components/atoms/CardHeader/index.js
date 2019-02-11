import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader as MaterialCardHeader } from '@material-ui/core';

const CardHeader = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialCardHeader {...defaultProps}>
      {children}
    </MaterialCardHeader>
  );
};

CardHeader.propTypes = {
  
    /**
    * The action to display in the card header.
    */
    action: PropTypes.node,
    
  
    /**
    * The Avatar for the Card Header.
    */
    avatar: PropTypes.node,
    
  
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
    * If `true`, the children won't be wrapped by a Typography component.
  * This can be useful to render an alternative Typography variant by wrapping
  * the `title` text, and optional `subheader` text
  * with the Typography component.
    */
    disableTypography: PropTypes.bool,
    
  
    /**
    * The content of the component.
    */
    subheader: PropTypes.node,
    
  
    /**
    * These props will be forwarded to the subheader
  * (as long as disableTypography is not `true`).
    */
    subheaderTypographyProps: PropTypes.object,
    
  
    /**
    * The content of the Card Title.
    */
    title: PropTypes.node,
    
  
    /**
    * These props will be forwarded to the title
  * (as long as disableTypography is not `true`).
    */
    titleTypographyProps: PropTypes.object,
    
};

CardHeader.defaultProps = {
  disableTypography: false
};

export default CardHeader;