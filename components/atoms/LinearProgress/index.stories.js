
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { LinearProgress } from '../..';

storiesOf('atoms/LinearProgress', module)
  .add('default', () => (
    <LinearProgress
      color={select('color', ['primary', 'secondary'], 'primary')}
      valueBuffer={number('valueBuffer', 0)}
      variant={select('variant', ['determinate', 'indeterminate', 'buffer', 'query'], 'indeterminate')}
    >
      {text('children', 'Test')}
    </LinearProgress>
  ),
  {
    info: {

    },
  });
