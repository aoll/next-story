import React from 'react';
import PropTypes from 'prop-types';
import { Button as MaterialButton } from '@material-ui/core';

const Button = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialButton {...defaultProps}>
      {children}
    </MaterialButton>
  );
};

Button.propTypes = {

  /**
  * The content of the button.
  */
  children: PropTypes.node.isRequired,


  /**
  * @ignore
  */
  className: PropTypes.string,


  /**
  * The color of the component. It supports those theme colors that make sense for this component.
  */
  color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary']),


  /**
  * The component used for the root node.
  * Either a string to use a DOM element or a component.
  */
  component: PropTypes.element,


  /**
  * If `true`, the button will be disabled.
  */
  disabled: PropTypes.bool,


  /**
  * If `true`, the  keyboard focus ripple will be disabled.
  * `disableRipple` must also be true.
  */
  disableFocusRipple: PropTypes.bool,


  /**
  * If `true`, the ripple effect will be disabled.
  */
  disableRipple: PropTypes.bool,


  /**
  * @ignore
  */
  focusVisibleClassName: PropTypes.string,


  /**
  * If `true`, the button will take up the full width of its container.
  */
  fullWidth: PropTypes.bool,


  /**
  * The URL to link to when the button is clicked.
  * If defined, an `a` element will be used as the root node.
  */
  href: PropTypes.string,


  /**
  * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
  */
  mini: PropTypes.bool,


  /**
  * The size of the button.
  * `small` is equivalent to the dense button styling.
  */
  size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
  * @ignore
  */
  type: PropTypes.string,

  /**
  * The variant to use.
  * __WARNING__: `flat` and `raised` are deprecated.
  * Instead use `text` and `contained` respectively.
  * `fab` and `extendedFab` are deprecated.
  * Instead use `<Fab>` and `<Fab variant="extended">`
  */
  variant: PropTypes.oneOf(['text', 'outlined', 'contained', 'fab', 'extendedFab', 'flat', 'raised']),
};

Button.defaultProps = {
  className: undefined,
  color: 'default',
  disabled: false,
  disableFocusRipple: false,
  disableRipple: undefined,
  focusVisibleClassName: undefined,
  fullWidth: false,
  href: undefined,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'text',
};

export default Button;
