
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { FormControl } from '../..';

storiesOf('atoms/FormControl', module)
  .add('default', () => (
    <FormControl
      className={text('className', undefined)}
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      fullWidth={boolean('fullWidth', false)}
      margin={select('margin', ['none','dense','normal'] ,'none')}
      required={boolean('required', false)}
      variant={select('variant', ['standard','outlined','filled'] ,'standard')}
    >
      {text('children', 'Test')}
    </FormControl>
  ),
  {
    info: {

    },
  })
