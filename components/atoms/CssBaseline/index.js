import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline as MaterialCssBaseline } from '@material-ui/core';

const CssBaseline = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialCssBaseline {...defaultProps}>
      {children}
    </MaterialCssBaseline>
  );
};

CssBaseline.propTypes = {

    /**
    *
    */

};

CssBaseline.defaultProps = {
  children: null
};

export default CssBaseline;
