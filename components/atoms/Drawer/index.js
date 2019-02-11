import React from 'react';
import PropTypes from 'prop-types';
import { Drawer as MaterialDrawer } from '@material-ui/core';

const Drawer = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialDrawer {...defaultProps}>
      {children}
    </MaterialDrawer>
  );
};

Drawer.propTypes = {
  
    /**
    * Side from which the drawer will appear.
    */
    anchor: PropTypes.oneOf(['left','top','right','bottom']),
    
  
    /**
    * @ignore
    */
    BackdropProps: PropTypes.object,
    
  
    /**
    * The contents of the drawer.
    */
    children: PropTypes.node,
    
  
    /**
    * @ignore
    */
    className: PropTypes.string,
    
  
    /**
    * The elevation of the drawer.
    */
    elevation: PropTypes.number,
    
  
    /**
    * Properties applied to the [`Modal`](/api/modal/) element.
    */
    ModalProps: PropTypes.object,
    
  
    /**
    * Callback fired when the component requests to be closed.
  * 
  * @param {object} event The event source of the callback
    */
    onClose: PropTypes.func,
    
  
    /**
    * If `true`, the drawer is open.
    */
    open: PropTypes.bool,
    
  
    /**
    * Properties applied to the [`Paper`](/api/paper/) element.
    */
    PaperProps: PropTypes.object,
    
  
    /**
    * Properties applied to the [`Slide`](/api/slide/) element.
    */
    SlideProps: PropTypes.object,
    
  
    /**
    * @ignore
    */
    theme: PropTypes.object.isRequired,
    
  
    /**
    * The duration for the transition, in milliseconds.
  * You may specify a single timeout for all transitions, or individually with an object.
    */
    transitionDuration: PropTypes.union,
    
  
    /**
    * The variant to use.
    */
    variant: PropTypes.oneOf(['permanent','persistent','temporary']),
    
};

Drawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  open: false,
  variant: 'temporary'
};

export default Drawer;