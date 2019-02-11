
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { InputBase } from '../..';

storiesOf('atoms/InputBase', module)
  .add('default', () => (
    <InputBase
      autoComplete={text('autoComplete', undefined)}
      autoFocus={boolean('autoFocus', undefined)}
      className={text('className', undefined)}
      defaultValue={text('defaultValue', undefined)}
      disabled={boolean('disabled', undefined)}
      endAdornment={text('endAdornment', undefined)}
      error={boolean('error', undefined)}
      fullWidth={boolean('fullWidth', false)}
      id={text('id', undefined)}
      inputComponent={text('inputComponent', 'input')}
      inputProps={text('inputProps', undefined)}
      inputRef={text('inputRef', undefined)}
      margin={select('margin', ['dense','none'] ,undefined)}
      muiFormControl={text('muiFormControl', undefined)}
      multiline={boolean('multiline', false)}
      name={text('name', undefined)}
      onBlur={text('onBlur', undefined)}
      onChange={text('onChange', undefined)}
      onClick={text('onClick', undefined)}
      onEmpty={text('onEmpty', undefined)}
      onFilled={text('onFilled', undefined)}
      onFocus={text('onFocus', undefined)}
      onKeyDown={text('onKeyDown', undefined)}
      onKeyUp={text('onKeyUp', undefined)}
      placeholder={text('placeholder', undefined)}
      readOnly={boolean('readOnly', undefined)}
      renderPrefix={text('renderPrefix', undefined)}
      required={boolean('required', undefined)}
      rows={text('rows', undefined)}
      rowsMax={text('rowsMax', undefined)}
      startAdornment={text('startAdornment', undefined)}
      type={text('type', 'text')}
      value={text('value', undefined)}
    >
      {text('children', 'Test')}
    </InputBase>
  ),
  {
    info: {

    },
  })
