const template = `import React from 'react';
import PropTypes from 'prop-types';
import { {name} as Material{name} } from '@material-ui/core';

const {name} = (props) => {
  const { children, ...defaultProps } = props;

  return (
    <Material{name} {...defaultProps}>
      {children}
    </Material{name}>
  );
};

{name}.propTypes = {
  {propTypes}
};

{name}.defaultProps = {
  {defaultProps}
};

export default {name};`;

exports.default = template;

// module.exports = name;
