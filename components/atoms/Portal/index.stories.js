
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Portal } from '../..';

storiesOf('atoms/Portal', module)
  .add('default', () => (
    <Portal
      
    >
      {text('children', 'Test')}
    </Portal>
  ),
  {
    info: {

    },
  });
