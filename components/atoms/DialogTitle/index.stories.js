
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { DialogTitle } from '../..';

storiesOf('atoms/DialogTitle', module)
  .add('default', () => (
    <DialogTitle
      disableTypography={boolean('disableTypography', false)}
    >
      {text('children', 'Test')}
    </DialogTitle>
  ),
  {
    info: {

    },
  });
