
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { SnackbarContent } from '../..';

storiesOf('atoms/SnackbarContent', module)
  .add('default', () => (
    <SnackbarContent
      action={text('action', undefined)}
      className={text('className', undefined)}
      message={text('message', undefined)}
    >
      {text('children', 'Test')}
    </SnackbarContent>
  ),
  {
    info: {

    },
  })
