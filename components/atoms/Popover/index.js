import React from 'react';
import PropTypes from 'prop-types';
import { Popover as MaterialPopover } from '@material-ui/core';

const Popover = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialPopover {...defaultProps}>
      {children}
    </MaterialPopover>
  );
};

Popover.propTypes = {
  
    /**
    * This is callback property. It's called by the component on mount.
  * This is useful when you want to trigger an action programmatically.
  * It currently only supports updatePosition() action.
  * 
  * @param {object} actions This object contains all possible actions
  * that can be triggered programmatically.
    */
    action: PropTypes.func,
    
  
    /**
    * This is the DOM element, or a function that returns the DOM element,
  * that may be used to set the position of the popover.
    */
    anchorEl: PropTypes.union,
    
  
    /**
    * This is the point on the anchor where the popover's
  * `anchorEl` will attach to. This is not used when the
  * anchorReference is 'anchorPosition'.
  * 
  * Options:
  * vertical: [top, center, bottom];
  * horizontal: [left, center, right].
    */
    anchorOrigin: PropTypes.shape,
    
  
    /**
    * This is the position that may be used
  * to set the position of the popover.
  * The coordinates are relative to
  * the application's client area.
    */
    anchorPosition: PropTypes.shape,
    
  
    /**
    * 
    */
    anchorReference: PropTypes.oneOf(['anchorEl','anchorPosition','none']),
    
  
    /**
    * The content of the component.
    */
    children: PropTypes.node,
    
  
    /**
    * A node, component instance, or function that returns either.
  * The `container` will passed to the Modal component.
  * By default, it uses the body of the anchorEl's top-level document object,
  * so it's simply `document.body` most of the time.
    */
    container: PropTypes.union,
    
  
    /**
    * The elevation of the popover.
    */
    elevation: PropTypes.number,
    
  
    /**
    * This function is called in order to retrieve the content anchor element.
  * It's the opposite of the `anchorEl` property.
  * The content anchor element should be an element inside the popover.
  * It's used to correctly scroll and set the position of the popover.
  * The positioning strategy tries to make the content anchor element just above the
  * anchor element.
    */
    getContentAnchorEl: PropTypes.func,
    
  
    /**
    * Specifies how close to the edge of the window the popover can appear.
    */
    marginThreshold: PropTypes.number,
    
  
    /**
    * `classes` property applied to the [`Modal`](/api/modal/) element.
    */
    ModalClasses: PropTypes.object,
    
  
    /**
    * Callback fired when the component requests to be closed.
  * 
  * @param {object} event The event source of the callback.
  * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
    */
    onClose: PropTypes.func,
    
  
    /**
    * Callback fired before the component is entering.
    */
    onEnter: PropTypes.func,
    
  
    /**
    * Callback fired when the component has entered.
    */
    onEntered: PropTypes.func,
    
  
    /**
    * Callback fired when the component is entering.
    */
    onEntering: PropTypes.func,
    
  
    /**
    * Callback fired before the component is exiting.
    */
    onExit: PropTypes.func,
    
  
    /**
    * Callback fired when the component has exited.
    */
    onExited: PropTypes.func,
    
  
    /**
    * Callback fired when the component is exiting.
    */
    onExiting: PropTypes.func,
    
  
    /**
    * If `true`, the popover is visible.
    */
    open: PropTypes.bool.isRequired,
    
  
    /**
    * Properties applied to the [`Paper`](/api/paper/) element.
    */
    PaperProps: PropTypes.object,
    
  
    /**
    * @ignore
    */
    role: PropTypes.string,
    
  
    /**
    * This is the point on the popover which
  * will attach to the anchor's origin.
  * 
  * Options:
  * vertical: [top, center, bottom, x(px)];
  * horizontal: [left, center, right, x(px)].
    */
    transformOrigin: PropTypes.shape,
    
  
    /**
    * The component used for the transition.
    */
    TransitionComponent: PropTypes.element,
    
  
    /**
    * Set to 'auto' to automatically calculate transition time based on height.
    */
    transitionDuration: PropTypes.union,
    
  
    /**
    * Properties applied to the `Transition` element.
    */
    TransitionProps: PropTypes.object,
    
};

Popover.defaultProps = {
  anchorOrigin: {
  vertical: 'top',
  horizontal: 'left'
},
  anchorReference: 'anchorEl',
  elevation: 8,
  marginThreshold: 16,
  transformOrigin: {
  vertical: 'top',
  horizontal: 'left'
},
  transitionDuration: 'auto'
};

export default Popover;