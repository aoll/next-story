
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { StepButton } from '../..';

storiesOf('atoms/StepButton', module)
  .add('default', () => (
    <StepButton
      active={boolean('active', false)}
      alternativeLabel={boolean('alternativeLabel', false)}
      completed={boolean('completed', false)}
      disabled={boolean('disabled', false)}
      last={boolean('last', false)}
      orientation={select('orientation', ['horizontal', 'vertical'], undefined)}
    >
      {text('children', 'Test')}
    </StepButton>
  ),
  {
    info: {

    },
  });
