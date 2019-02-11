
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { FormLabel } from '../..';

storiesOf('atoms/FormLabel', module)
  .add('default', () => (
    <FormLabel
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      filled={boolean('filled', false)}
      focused={boolean('focused', false)}
      required={boolean('required', false)}
    >
      {text('children', 'Test')}
    </FormLabel>
  ),
  {
    info: {

    },
  });
