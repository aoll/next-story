
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Paper } from '../..';

storiesOf('atoms/Paper', module)
  .add('default', () => (
    <Paper
      elevation={text('elevation', 2)}
      square={boolean('square', false)}
    >
      {text('children', 'Test')}
    </Paper>
  ),
  {
    info: {

    },
  });
