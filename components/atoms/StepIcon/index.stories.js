
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { StepIcon } from '../..';

storiesOf('atoms/StepIcon', module)
  .add('default', () => (
    <StepIcon
      active={boolean('active', false)}
      completed={boolean('completed', false)}
      error={boolean('error', false)}
      icon={text('icon', undefined)}
    >
      {text('children', 'Test')}
    </StepIcon>
  ),
  {
    info: {

    },
  });
