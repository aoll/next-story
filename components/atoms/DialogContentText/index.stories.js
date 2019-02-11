
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { DialogContentText } from '../..';

storiesOf('atoms/DialogContentText', module)
  .add('default', () => (
    <DialogContentText
      
    >
      {text('children', 'Test')}
    </DialogContentText>
  ),
  {
    info: {

    },
  })
