
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { InputLabel } from '../..';

storiesOf('atoms/InputLabel', module)
  .add('default', () => (
    <InputLabel
      disableAnimation={boolean('disableAnimation', false)}
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      focused={boolean('focused', false)}
      margin={select('margin', ['dense'], undefined)}
      required={boolean('required', false)}
      shrink={boolean('shrink', false)}
      variant={select('variant', ['standard', 'outlined', 'filled'], undefined)}
    >
      {text('children', 'Test')}
    </InputLabel>
  ),
  {
    info: {

    },
  });
