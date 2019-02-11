import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBase as MaterialButtonBase } from '@material-ui/core';

const ButtonBase = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialButtonBase {...defaultProps}>
      {children}
    </MaterialButtonBase>
  );
};

ButtonBase.propTypes = {
  
    /**
    * Callback fired when the component mounts.
  * This is useful when you want to trigger an action programmatically.
  * It currently only supports `focusVisible()` action.
  * 
  * @param {object} actions This object contains all possible actions
  * that can be triggered programmatically.
    */
    action: PropTypes.func,
    
  
    /**
    * Use that property to pass a ref callback to the native button component.
    */
    buttonRef: PropTypes.union,
    
  
    /**
    * If `true`, the ripples will be centered.
  * They won't start at the cursor interaction position.
    */
    centerRipple: PropTypes.bool,
    
  
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
    * If `true`, the base button will be disabled.
    */
    disabled: PropTypes.bool,
    
  
    /**
    * If `true`, the ripple effect will be disabled.
    */
    disableRipple: PropTypes.bool,
    
  
    /**
    * If `true`, the touch ripple effect will be disabled.
    */
    disableTouchRipple: PropTypes.bool,
    
  
    /**
    * If `true`, the base button will have a keyboard focus ripple.
  * `disableRipple` must also be `false`.
    */
    focusRipple: PropTypes.bool,
    
  
    /**
    * This property can help a person know which element has the keyboard focus.
  * The class name will be applied when the element gain the focus through a keyboard interaction.
  * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
  * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
  * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
  * if needed.
    */
    focusVisibleClassName: PropTypes.string,
    
  
    /**
    * @ignore
    */
    onBlur: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onClick: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onFocus: PropTypes.func,
    
  
    /**
    * Callback fired when the component is focused with a keyboard.
  * We trigger a `onFocus` callback too.
    */
    onFocusVisible: PropTypes.func,
    
  
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
    onMouseDown: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onMouseLeave: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onMouseUp: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onTouchEnd: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onTouchMove: PropTypes.func,
    
  
    /**
    * @ignore
    */
    onTouchStart: PropTypes.func,
    
  
    /**
    * @ignore
    */
    role: PropTypes.string,
    
  
    /**
    * @ignore
    */
    tabIndex: PropTypes.union,
    
  
    /**
    * Properties applied to the `TouchRipple` element.
    */
    TouchRippleProps: PropTypes.object,
    
  
    /**
    * Used to control the button's purpose.
  * This property passes the value to the `type` attribute of the native button component.
  * Valid property values include `button`, `submit`, and `reset`.
    */
    type: PropTypes.string,
    
};

ButtonBase.defaultProps = {
  centerRipple: false,
  disableRipple: false,
  disableTouchRipple: false,
  focusRipple: false,
  tabIndex: '0',
  type: 'button'
};

export default ButtonBase;