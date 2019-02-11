import React from 'react';
import PropTypes from 'prop-types';
import { Zoom as MaterialZoom } from '@material-ui/core';

const Zoom = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialZoom {...defaultProps}>
      {children}
    </MaterialZoom>
  );
};

Zoom.propTypes = {
  /**
   * If `true`, the component will transition in.
   */
  in: PropTypes.bool,
  /**
   * @ignore
   */
  theme: PropTypes.object.isRequired,
};

Zoom.defaultProps = {
  
};

export default Zoom;