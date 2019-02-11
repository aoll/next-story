
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { CircularProgress } from '../..';

storiesOf('atoms/CircularProgress', module)
  .add('default', () => (
    <CircularProgress
      className={text('className', undefined)}
      color={select('color', ['primary','secondary','inherit'] ,'primary')}
      disableShrink={boolean('disableShrink', false)}
      size={text('size', 40)}
      style={text('style', undefined)}
      thickness={text('thickness', 3.6)}
      value={text('value', 0)}
      variant={select('variant', ['determinate','indeterminate','static'] ,'indeterminate')}
    >
      {text('children', 'Test')}
    </CircularProgress>
  ),
  {
    info: {

    },
  })
