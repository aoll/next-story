
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { AppBar } from '../..';

storiesOf('atoms/AppBar', module)
  .add('default', () => (
    <AppBar
      className={text('className', undefined)}
      color={select('color', ['inherit','primary','secondary','default'] ,'primary')}
      position={select('position', ['fixed','absolute','sticky','static','relative'] ,'fixed')}
    >
      {text('children', 'Test')}
    </AppBar>
  ),
  {
    info: {

    },
  })
