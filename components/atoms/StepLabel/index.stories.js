
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { StepLabel } from '../..';

storiesOf('atoms/StepLabel', module)
  .add('default', () => (
    <StepLabel
      active={boolean('active', false)}
      alternativeLabel={boolean('alternativeLabel', false)}
      completed={boolean('completed', false)}
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      last={boolean('last', false)}
      orientation={select('orientation', ['horizontal', 'vertical'], 'horizontal')}
    >
      {text('children', 'Test')}
    </StepLabel>
  ),
  {
    info: {

    },
  });
