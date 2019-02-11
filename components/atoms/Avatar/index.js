import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as MaterialAvatar } from '@material-ui/core';

const Avatar = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialAvatar {...defaultProps}>
      {children}
    </MaterialAvatar>
  );
};

Avatar.propTypes = {
  /**
   * Used in combination with `src` or `srcSet` to
   * provide an alt attribute for the rendered `img` element.
   */
  alt: PropTypes.string,
  /**
   * @ignore
   * The className of the child element.
   * Used by Chip and ListItemIcon to style the Avatar icon.
   */
  childrenClassName: PropTypes.string,
  /**
   * The `sizes` attribute for the `img` element.
   */
  sizes: PropTypes.string,
  /**
   * The `src` attribute for the `img` element.
   */
  src: PropTypes.string,
  /**
   * The `srcSet` attribute for the `img` element.
   */
  srcSet: PropTypes.string,
};

Avatar.defaultProps = {
  
};

export default Avatar;