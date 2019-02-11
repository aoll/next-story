
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { FormGroup } from '../..';

storiesOf('atoms/FormGroup', module)
  .add('default', () => (
    <FormGroup
      className={text('className', undefined)}
      row={boolean('row', false)}
    >
      {text('children', 'Test')}
    </FormGroup>
  ),
  {
    info: {

    },
  })
