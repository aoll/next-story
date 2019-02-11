
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { FormControlLabel } from '../..';

storiesOf('atoms/FormControlLabel', module)
  .add('default', () => (
    <FormControlLabel
      checked={text('checked', undefined)}
      className={text('className', undefined)}
      control={text('control', undefined)}
      disabled={boolean('disabled', undefined)}
      inputRef={text('inputRef', undefined)}
      label={text('label', undefined)}
      labelPlacement={select('labelPlacement', ['end','start','top','bottom'] ,'end')}
      muiFormControl={text('muiFormControl', undefined)}
      name={text('name', undefined)}
      onChange={text('onChange', undefined)}
      value={text('value', undefined)}
    >
      {text('children', 'Test')}
    </FormControlLabel>
  ),
  {
    info: {

    },
  })
