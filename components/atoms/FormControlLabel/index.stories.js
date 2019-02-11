
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { FormControlLabel } from '../..';

storiesOf('atoms/FormControlLabel', module)
  .add('default', () => (
    <FormControlLabel
      disabled={boolean('disabled', false)}
      labelPlacement={select('labelPlacement', ['end', 'start', 'top', 'bottom'], 'end')}
      name={text('name', undefined)}
    >
      {text('children', 'Test')}
    </FormControlLabel>
  ),
  {
    info: {

    },
  });
