import React from 'react';
import PropTypes from 'prop-types';
import { Fade as MaterialFade } from '@material-ui/core';

const Fade = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialFade {...defaultProps}>
      {children}
    </MaterialFade>
  );
};

Fade.propTypes = {
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
};

Fade.defaultProps = {
  
};

export default Fade;