import React from 'react';
import PropTypes from 'prop-types';
import { SvgIcon as MaterialSvgIcon } from '@material-ui/core';

const SvgIcon = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialSvgIcon {...defaultProps}>
      {children}
    </MaterialSvgIcon>
  );
};

SvgIcon.propTypes = {
  
    /**
    * Node passed into the SVG element.
    */
    children: PropTypes.node.isRequired,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The color of the component. It supports those theme colors that make sense for this component.
  * You can use the `nativeColor` property to apply a color attribute to the SVG element.
    */
    color: PropTypes.oneOf(['inherit','primary','secondary','action','error','disabled']),
    
  
    /**
    * The component used for the root node.
  * Either a string to use a DOM element or a component.
    */
    component: PropTypes.element,
    
  
    /**
    * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
    */
    fontSize: PropTypes.oneOf(['inherit','default','small','large']),
    
  
    /**
    * Applies a color attribute to the SVG element.
    */
    nativeColor: PropTypes.string,
    
  
    /**
    * The shape-rendering attribute. The behavior of the different options is described on the
  * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
  * If you are having issues with blurry icons you should investigate this property.
    */
    shapeRendering: PropTypes.string,
    
  
    /**
    * Provides a human-readable title for the element that contains it.
  * https://www.w3.org/TR/SVG-access/#Equivalent
    */
    titleAccess: PropTypes.string,
    
  
    /**
    * Allows you to redefine what the coordinates without units mean inside an SVG element.
  * For example, if the SVG element is 500 (width) by 200 (height),
  * and you pass viewBox="0 0 50 20",
  * this means that the coordinates inside the SVG will go from the top left corner (0,0)
  * to bottom right (50,20) and each unit will be worth 10px.
    */
    viewBox: PropTypes.string,
    
};

SvgIcon.defaultProps = {
  color: 'inherit',
  fontSize: 'default',
  viewBox: '0 0 24 24'
};

export default SvgIcon;