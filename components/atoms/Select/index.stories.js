
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Select } from '../..';

storiesOf('atoms/Select', module)
  .add('default', () => (
    <Select
      autoWidth={boolean('autoWidth', false)}
      displayEmpty={boolean('displayEmpty', false)}
      multiple={boolean('multiple', false)}
      native={boolean('native', false)}
      open={boolean('open', false)}
      variant={select('variant', ['standard', 'outlined', 'filled'], undefined)}
    >
      {text('children', 'Test')}
    </Select>
  ),
  {
    info: {

    },
  });
