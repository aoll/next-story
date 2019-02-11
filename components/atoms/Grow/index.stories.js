
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Grow } from '../..';

storiesOf('atoms/Grow', module)
  .add('default', () => (
    <Grow
      in={boolean('in', false)}
      theme={text('theme', undefined)}
    >
      {text('children', 'Test')}
    </Grow>
  ),
  {
    info: {

    },
  });
