import React from 'react';
import PropTypes from 'prop-types';
import { CardMedia as MaterialCardMedia } from '@material-ui/core';

const CardMedia = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialCardMedia {...defaultProps}>
      {children}
    </MaterialCardMedia>
  );
};

CardMedia.propTypes = {
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: PropTypes.string,
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: PropTypes.string,
};

CardMedia.defaultProps = {
  
};

export default CardMedia;