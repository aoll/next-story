
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { CardContent } from '../..';

storiesOf('atoms/CardContent', module)
  .add('default', () => (
    <CardContent
      
    >
      {text('children', 'Test')}
    </CardContent>
  ),
  {
    info: {

    },
  });
