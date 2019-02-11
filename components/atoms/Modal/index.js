import React from 'react';
import PropTypes from 'prop-types';
import { Modal as MaterialModal } from '@material-ui/core';

const Modal = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialModal {...defaultProps}>
      {children}
    </MaterialModal>
  );
};

Modal.propTypes = {

    /**
    * A backdrop component. This property enables custom backdrop rendering.
    */
    BackdropComponent: PropTypes.element,


    /**
    * Properties applied to the [`Backdrop`](/api/backdrop/) element.
    */
    BackdropProps: PropTypes.object,


    /**
    * A single child content element.
    */
    children: PropTypes.element,


    /**
    * @ignore
    */
    className: PropTypes.string,


    /**
    * When set to true the Modal waits until a nested Transition is completed before closing.
    */
    closeAfterTransition: PropTypes.bool,


    /**
    * A node, component instance, or function that returns either.
  * The `container` will have the portal children appended to it.
    */
    container: PropTypes.union,


    /**
    * If `true`, the modal will not automatically shift focus to itself when it opens, and
  * replace it to the last focused element when it closes.
  * This also works correctly with any modal children that have the `disableAutoFocus` prop.
  *
  * Generally this should never be set to `true` as it makes the modal less
  * accessible to assistive technologies, like screen readers.
    */
    disableAutoFocus: PropTypes.bool,


    /**
    * If `true`, clicking the backdrop will not fire any callback.
    */
    disableBackdropClick: PropTypes.bool,


    /**
    * If `true`, the modal will not prevent focus from leaving the modal while open.
  *
  * Generally this should never be set to `true` as it makes the modal less
  * accessible to assistive technologies, like screen readers.
    */
    disableEnforceFocus: PropTypes.bool,


    /**
    * If `true`, hitting escape will not fire any callback.
    */
    disableEscapeKeyDown: PropTypes.bool,


    /**
    * Disable the portal behavior.
  * The children stay within it's parent DOM hierarchy.
    */
    disablePortal: PropTypes.bool,


    /**
    * If `true`, the modal will not restore focus to previously focused element once
  * modal is hidden.
    */
    disableRestoreFocus: PropTypes.bool,


    /**
    * If `true`, the backdrop is not rendered.
    */
    hideBackdrop: PropTypes.bool,


    /**
    * Always keep the children in the DOM.
  * This property can be useful in SEO situation or
  * when you want to maximize the responsiveness of the Modal.
    */
    keepMounted: PropTypes.bool,


    /**
    * @ignore
  *
  * A modal manager used to track and manage the state of open
  * Modals. This enables customizing how modals interact within a container.
    */
    manager: PropTypes.object,


    /**
    * Callback fired when the backdrop is clicked.
    */
    onBackdropClick: PropTypes.func,


    /**
    * Callback fired when the component requests to be closed.
  * The `reason` parameter can optionally be used to control the response to `onClose`.
  *
  * @param {object} event The event source of the callback
  * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
    */
    onClose: PropTypes.func,


    /**
    * Callback fired when the escape key is pressed,
  * `disableEscapeKeyDown` is false and the modal is in focus.
    */
    onEscapeKeyDown: PropTypes.func,


    /**
    * Callback fired once the children has been mounted into the `container`.
  * It signals that the `open={true}` property took effect.
    */
    onRendered: PropTypes.func,


    /**
    * If `true`, the modal is open.
    */
    open: PropTypes.bool.isRequired,

};

Modal.defaultProps = {
  closeAfterTransition: false,
  disableAutoFocus: false,
  disableBackdropClick: false,
  disableEnforceFocus: false,
  disableEscapeKeyDown: false,
  disablePortal: false,
  disableRestoreFocus: false,
  hideBackdrop: false,
  keepMounted: false,
};

export default Modal;
