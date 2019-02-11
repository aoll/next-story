import React from 'react';
import PropTypes from 'prop-types';
import { NoSsr as MaterialNoSsr } from '@material-ui/core';

const NoSsr = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <MaterialNoSsr {...defaultProps}>
      {children}
    </MaterialNoSsr>
  );
};

NoSsr.propTypes = {

    /**
    *
    */


    /**
    *
    */

};

NoSsr.defaultProps = {
  defer: false,
  fallback: null
};

export default NoSsr;
