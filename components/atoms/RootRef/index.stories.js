
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { RootRef } from '../..';

storiesOf('atoms/RootRef', module)
  .add('default', () => (
    <RootRef
      
    >
      {text('children', 'Test')}
    </RootRef>
  ),
  {
    info: {

    },
  });
