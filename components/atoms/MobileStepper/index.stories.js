
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { MobileStepper } from '../..';

storiesOf('atoms/MobileStepper', module)
  .add('default', () => (
    <MobileStepper
      activeStep={text('activeStep', 0)}
      position={select('position', ['bottom', 'top', 'static'], 'bottom')}
      steps={text('steps', undefined)}
      variant={select('variant', ['text', 'dots', 'progress'], 'dots')}
    >
      {text('children', 'Test')}
    </MobileStepper>
  ),
  {
    info: {

    },
  });
