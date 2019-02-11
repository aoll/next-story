
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { TablePagination } from '../..';

storiesOf('atoms/TablePagination', module)
  .add('default', () => (
    <TablePagination
      colSpan={text('colSpan', undefined)}
      count={text('count', undefined)}
      onChangePage={text('onChangePage', undefined)}
      page={text('page', undefined)}
      rowsPerPage={text('rowsPerPage', undefined)}
    >
      {text('children', 'Test')}
    </TablePagination>
  ),
  {
    info: {

    },
  });
