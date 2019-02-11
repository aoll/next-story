const template = `import React from 'react';
import PropTypes from 'prop-types';
import { {name} as Material{name} } from '@material-ui/core';

const {name} = (props) => {
  const { ...defaultProps } = props;

  return (
    <Material{name} {...defaultProps} />
  );
};

{name}.propTypes = {
  {propTypes}
};

{name}.defaultProps = {
  {defaultProps}
};

export default {name};`;

exports.exports = template;

// module.exports = name;
