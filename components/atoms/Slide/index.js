import React from 'react';
import PropTypes from 'prop-types';
import { Slide as MaterialSlide } from '@material-ui/core';

const Slide = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialSlide {...defaultProps}>
      {children}
    </MaterialSlide>
  );
};

Slide.propTypes = {
  /**
   * Direction the child node will enter from.
   */
  direction: PropTypes.oneOf(['left', 'right', 'up', 'down']),
  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
};

Slide.defaultProps = {
  direction: 'down'
};

export default Slide;