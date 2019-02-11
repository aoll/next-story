
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { FormLabel } from '../..';

storiesOf('atoms/FormLabel', module)
  .add('default', () => (
    <FormLabel
      className={text('className', undefined)}
      disabled={boolean('disabled', undefined)}
      error={boolean('error', undefined)}
      filled={boolean('filled', undefined)}
      focused={boolean('focused', undefined)}
      muiFormControl={text('muiFormControl', undefined)}
      required={boolean('required', undefined)}
    >
      {text('children', 'Test')}
    </FormLabel>
  ),
  {
    info: {

    },
  })
