
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { FormHelperText } from '../..';

storiesOf('atoms/FormHelperText', module)
  .add('default', () => (
    <FormHelperText
      className={text('className', undefined)}
      disabled={boolean('disabled', undefined)}
      error={boolean('error', undefined)}
      filled={boolean('filled', undefined)}
      focused={boolean('focused', undefined)}
      margin={select('margin', ['dense'] ,undefined)}
      muiFormControl={text('muiFormControl', undefined)}
      required={boolean('required', undefined)}
      variant={select('variant', ['standard','outlined','filled'] ,undefined)}
    >
      {text('children', 'Test')}
    </FormHelperText>
  ),
  {
    info: {

    },
  })
