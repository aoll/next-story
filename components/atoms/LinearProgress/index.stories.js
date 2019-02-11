
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { LinearProgress } from '../..';

storiesOf('atoms/LinearProgress', module)
  .add('default', () => (
    <LinearProgress
      className={text('className', undefined)}
      color={select('color', ['primary','secondary'] ,'primary')}
      value={text('value', undefined)}
      valueBuffer={text('valueBuffer', undefined)}
      variant={select('variant', ['determinate','indeterminate','buffer','query'] ,'indeterminate')}
    >
      {text('children', 'Test')}
    </LinearProgress>
  ),
  {
    info: {

    },
  })
