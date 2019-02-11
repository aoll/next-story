
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { StepContent } from '../..';

storiesOf('atoms/StepContent', module)
  .add('default', () => (
    <StepContent
      active={boolean('active', false)}
      alternativeLabel={boolean('alternativeLabel', false)}
      completed={boolean('completed', false)}
      last={boolean('last', false)}
      optional={boolean('optional', false)}
      orientation={select('orientation', ['horizontal', 'vertical'], undefined)}
    >
      {text('children', 'Test')}
    </StepContent>
  ),
  {
    info: {

    },
  });
