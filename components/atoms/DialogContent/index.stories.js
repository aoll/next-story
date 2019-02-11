
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { DialogContent } from '../..';

storiesOf('atoms/DialogContent', module)
  .add('default', () => (
    <DialogContent
      
    >
      {text('children', 'Test')}
    </DialogContent>
  ),
  {
    info: {

    },
  });
