
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Grow } from '../..';

storiesOf('atoms/Grow', module)
  .add('default', () => (
    <Grow
      in={boolean('in', undefined)}
      onEnter={text('onEnter', undefined)}
      onExit={text('onExit', undefined)}
      style={text('style', undefined)}
      theme={text('theme', undefined)}
      timeout={text('timeout', 'auto')}
    >
      {text('children', 'Test')}
    </Grow>
  ),
  {
    info: {

    },
  })
