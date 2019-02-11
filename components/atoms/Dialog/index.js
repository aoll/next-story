import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as MaterialDialog } from '@material-ui/core';

const Dialog = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialDialog {...defaultProps}>
      {children}
    </MaterialDialog>
  );
};

Dialog.propTypes = {
  
    /**
    * @ignore
    */
    BackdropProps: PropTypes.object,
    
  
    /**
    * Dialog children, usually the included sub-components.
    */
    children: PropTypes.node.isRequired,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * If `true`, clicking the backdrop will not fire the `onClose` callback.
    */
    disableBackdropClick: PropTypes.bool,
    
  
    /**
    * If `true`, hitting escape will not fire the `onClose` callback.
    */
    disableEscapeKeyDown: PropTypes.bool,
    
  
    /**
    * If `true`, the dialog will be full-screen
    */
    fullScreen: PropTypes.bool,
    
  
    /**
    * If `true`, the dialog stretches to `maxWidth`.
    */
    fullWidth: PropTypes.bool,
    
  
    /**
    * Determine the max width of the dialog.
  * The dialog width grows with the size of the screen, this property is useful
  * on the desktop where you might need some coherent different width size across your
  * application. Set to `false` to disable `maxWidth`.
    */
    maxWidth: PropTypes.oneOf(['xs','sm','md','lg','xl',false]),
    
  
    /**
    * Callback fired when the backdrop is clicked.
    */
    onBackdropClick: PropTypes.func,
    
  
    /**
    * Callback fired when the component requests to be closed.
  * 
  * @param {object} event The event source of the callback
  * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
    */
    onClose: PropTypes.func,
    
  
    /**
    * Callback fired before the dialog enters.
    */
    onEnter: PropTypes.func,
    
  
    /**
    * Callback fired when the dialog has entered.
    */
    onEntered: PropTypes.func,
    
  
    /**
    * Callback fired when the dialog is entering.
    */
    onEntering: PropTypes.func,
    
  
    /**
    * Callback fired when the escape key is pressed,
  * `disableKeyboard` is false and the modal is in focus.
    */
    onEscapeKeyDown: PropTypes.func,
    
  
    /**
    * Callback fired before the dialog exits.
    */
    onExit: PropTypes.func,
    
  
    /**
    * Callback fired when the dialog has exited.
    */
    onExited: PropTypes.func,
    
  
    /**
    * Callback fired when the dialog is exiting.
    */
    onExiting: PropTypes.func,
    
  
    /**
    * If `true`, the Dialog is open.
    */
    open: PropTypes.bool.isRequired,
    
  
    /**
    * The component used to render the body of the dialog.
    */
    PaperComponent: PropTypes.element,
    
  
    /**
    * Properties applied to the [`Paper`](/api/paper/) element.
    */
    PaperProps: PropTypes.object,
    
  
    /**
    * Determine the container for scrolling the dialog.
    */
    scroll: PropTypes.oneOf(['body','paper']),
    
  
    /**
    * The component used for the transition.
    */
    TransitionComponent: PropTypes.custom,
    
  
    /**
    * The duration for the transition, in milliseconds.
  * You may specify a single timeout for all transitions, or individually with an object.
    */
    transitionDuration: PropTypes.union,
    
  
    /**
    * Properties applied to the `Transition` element.
    */
    TransitionProps: PropTypes.object,
    
};

Dialog.defaultProps = {
  disableBackdropClick: false,
  disableEscapeKeyDown: false,
  fullScreen: false,
  fullWidth: false,
  maxWidth: 'sm',
  scroll: 'paper'
};

export default Dialog;