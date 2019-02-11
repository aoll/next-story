
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Radio } from '../..';

storiesOf('atoms/Radio', module)
  .add('default', () => (
    <Radio
      color={select('color', ['primary', 'secondary', 'default'], 'secondary')}
      disabled={boolean('disabled', false)}
      disableRipple={boolean('disableRipple', false)}
      id={text('id', undefined)}
    >
      {text('children', 'Test')}
    </Radio>
  ),
  {
    info: {

    },
  });
