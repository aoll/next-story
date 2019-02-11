const template = `
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { {name} } from '../..';

storiesOf('atoms/{name}', module)
  .add('default', () => (
    <{name}
      {props}
    />
  ),
  {
    info: {

    },
  })
`;

module.exports = template;
