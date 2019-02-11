
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { InputLabel } from '../..';

storiesOf('atoms/InputLabel', module)
  .add('default', () => (
    <InputLabel
      className={text('className', undefined)}
      disableAnimation={boolean('disableAnimation', false)}
      disabled={boolean('disabled', undefined)}
      error={boolean('error', undefined)}
      focused={boolean('focused', undefined)}
      FormLabelClasses={text('FormLabelClasses', undefined)}
      margin={select('margin', ['dense'] ,undefined)}
      muiFormControl={text('muiFormControl', undefined)}
      required={boolean('required', undefined)}
      shrink={boolean('shrink', undefined)}
      variant={select('variant', ['standard','outlined','filled'] ,undefined)}
    >
      {text('children', 'Test')}
    </InputLabel>
  ),
  {
    info: {

    },
  })
