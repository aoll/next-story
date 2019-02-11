
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
      className={text('className', undefined)}
      completed={boolean('completed', false)}
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      icon={text('icon', undefined)}
      last={boolean('last', false)}
      optional={text('optional', undefined)}
      orientation={select('orientation', ['horizontal','vertical'] ,'horizontal')}
      StepIconComponent={text('StepIconComponent', undefined)}
      StepIconProps={text('StepIconProps', undefined)}
    >
      {text('children', 'Test')}
    </StepLabel>
  ),
  {
    info: {

    },
  })
