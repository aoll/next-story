
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { TableRow } from '../..';

storiesOf('atoms/TableRow', module)
  .add('default', () => (
    <TableRow
      hover={boolean('hover', false)}
      selected={boolean('selected', false)}
    >
      {text('children', 'Test')}
    </TableRow>
  ),
  {
    info: {

    },
  });
