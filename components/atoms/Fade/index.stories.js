
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Fade } from '../..';

storiesOf('atoms/Fade', module)
  .add('default', () => (
    <Fade
      in={boolean('in', false)}
      theme={text('theme', undefined)}
    >
      {text('children', 'Test')}
    </Fade>
  ),
  {
    info: {

    },
  });
