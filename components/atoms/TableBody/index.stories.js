
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { TableBody } from '../..';

storiesOf('atoms/TableBody', module)
  .add('default', () => (
    <TableBody
      
    >
      {text('children', 'Test')}
    </TableBody>
  ),
  {
    info: {

    },
  });
