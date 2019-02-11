
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { CardHeader } from '../..';

storiesOf('atoms/CardHeader', module)
  .add('default', () => (
    <CardHeader
      disableTypography={boolean('disableTypography', false)}
    >
      {text('children', 'Test')}
    </CardHeader>
  ),
  {
    info: {

    },
  });
