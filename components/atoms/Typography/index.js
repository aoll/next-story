import React from 'react';
import PropTypes from 'prop-types';
import { Typography as MaterialTypography } from '@material-ui/core';

const Typography = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialTypography {...defaultProps}>
      {children}
    </MaterialTypography>
  );
};

Typography.propTypes = {
  /**
   * Set the text-align on the component.
   */
  align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['default', 'error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary']),
  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: PropTypes.bool,
  /**
   * Controls whether the Typography is inline or not.
   */
  inline: PropTypes.bool,
  /**
   * A deprecated variant is used from an internal component. Users don't need
   * a deprecation warning here if they switched to the v2 theme. They already
   * get the mapping that will be applied in the next major release.
   * 
   * @internal
   */
  internalDeprecatedVariant: PropTypes.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: PropTypes.bool,
  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: PropTypes.bool,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
  /**
   * Applies the theme typography styles.
   * Use `body1` as the default value with the legacy implementation and `body2` with the new one.
   */
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'srOnly',"inherit",'display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading']),
};

Typography.defaultProps = {
  align: 'inherit',
  color: 'default',
  gutterBottom: false,
  inline: false,
  noWrap: false,
  paragraph: false
};

export default Typography;