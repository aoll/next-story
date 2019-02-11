
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Slide } from '../..';

storiesOf('atoms/Slide', module)
  .add('default', () => (
    <Slide
      direction={select('direction', ['left', 'right', 'up', 'down'], 'down')}
      in={boolean('in', false)}
      theme={text('theme', undefined)}
    >
      {text('children', 'Test')}
    </Slide>
  ),
  {
    info: {

    },
  });
