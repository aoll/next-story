
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { TableSortLabel } from '../..';

storiesOf('atoms/TableSortLabel', module)
  .add('default', () => (
    <TableSortLabel
      active={boolean('active', false)}
      direction={select('direction', ['asc', 'desc'], 'desc')}
      hideSortIcon={boolean('hideSortIcon', false)}
    >
      {text('children', 'Test')}
    </TableSortLabel>
  ),
  {
    info: {

    },
  });
