
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { DialogActions } from '../..';

storiesOf('atoms/DialogActions', module)
  .add('default', () => (
    <DialogActions
      className={text('className', undefined)}
      disableActionSpacing={boolean('disableActionSpacing', false)}
    >
      {text('children', 'Test')}
    </DialogActions>
  ),
  {
    info: {

    },
  })
