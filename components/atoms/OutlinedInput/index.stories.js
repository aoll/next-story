
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { OutlinedInput } from '../..';

storiesOf('atoms/OutlinedInput', module)
  .add('default', () => (
    <OutlinedInput
      autoComplete={text('autoComplete', undefined)}
      autoFocus={boolean('autoFocus', undefined)}
      className={text('className', undefined)}
      defaultValue={text('defaultValue', undefined)}
      disabled={boolean('disabled', undefined)}
      endAdornment={text('endAdornment', undefined)}
      error={boolean('error', undefined)}
      fullWidth={boolean('fullWidth', undefined)}
      id={text('id', undefined)}
      inputComponent={text('inputComponent', undefined)}
      inputProps={text('inputProps', undefined)}
      inputRef={text('inputRef', undefined)}
      labelWidth={text('labelWidth', undefined)}
      margin={select('margin', ['dense','none'] ,undefined)}
      multiline={boolean('multiline', undefined)}
      name={text('name', undefined)}
      notched={boolean('notched', undefined)}
      onChange={text('onChange', undefined)}
      placeholder={text('placeholder', undefined)}
      readOnly={boolean('readOnly', undefined)}
      required={boolean('required', undefined)}
      rows={text('rows', undefined)}
      rowsMax={text('rowsMax', undefined)}
      startAdornment={text('startAdornment', undefined)}
      type={text('type', undefined)}
      value={text('value', undefined)}
    >
      {text('children', 'Test')}
    </OutlinedInput>
  ),
  {
    info: {

    },
  })
