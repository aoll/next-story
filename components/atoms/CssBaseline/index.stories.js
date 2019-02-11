
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { CssBaseline } from '../..';

storiesOf('atoms/CssBaseline', module)
  .add('default', () => (
    <CssBaseline
      
    >
      {text('children', 'Test')}
    </CssBaseline>
  ),
  {
    info: {

    },
  });
