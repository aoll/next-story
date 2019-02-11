
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { NativeSelect } from '../..';

storiesOf('atoms/NativeSelect', module)
  .add('default', () => (
    <NativeSelect
      inputProps={text('inputProps', undefined)}
      muiFormControl={text('muiFormControl', undefined)}
      onChange={text('onChange', undefined)}
      value={text('value', undefined)}
      variant={select('variant', ['standard','outlined','filled'] ,undefined)}
    >
      {text('children', 'Test')}
    </NativeSelect>
  ),
  {
    info: {

    },
  })
