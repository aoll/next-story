
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Zoom } from '../..';

storiesOf('atoms/Zoom', module)
  .add('default', () => (
    <Zoom
      in={boolean('in', false)}
      theme={text('theme', undefined)}
    >
      {text('children', 'Test')}
    </Zoom>
  ),
  {
    info: {

    },
  });
