
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { InputAdornment } from '../..';

storiesOf('atoms/InputAdornment', module)
  .add('default', () => (
    <InputAdornment
      className={text('className', undefined)}
      disablePointerEvents={boolean('disablePointerEvents', false)}
      disableTypography={boolean('disableTypography', false)}
      muiFormControl={text('muiFormControl', undefined)}
      position={select('position', ['start','end'] ,undefined)}
      variant={select('variant', ['standard','outlined','filled'] ,undefined)}
    >
      {text('children', 'Test')}
    </InputAdornment>
  ),
  {
    info: {

    },
  })
