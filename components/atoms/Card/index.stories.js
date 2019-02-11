
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Card } from '../..';

storiesOf('atoms/Card', module)
  .add('default', () => (
    <Card
      raised={boolean('raised', false)}
    >
      {text('children', 'Test')}
    </Card>
  ),
  {
    info: {

    },
  });
