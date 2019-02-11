
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { TablePagination } from '../..';

storiesOf('atoms/TablePagination', module)
  .add('default', () => (
    <TablePagination
      backIconButtonProps={text('backIconButtonProps', undefined)}
      colSpan={text('colSpan', undefined)}
      count={text('count', undefined)}
      labelDisplayedRows={text('labelDisplayedRows', function labelDisplayedRows(_ref) {
  var from = _ref.from,
      to = _ref.to,
      count = _ref.count;
  return "".concat(from, "-").concat(to, " of ").concat(count);
})}
      labelRowsPerPage={text('labelRowsPerPage', 'Rows per page:')}
      nextIconButtonProps={text('nextIconButtonProps', undefined)}
      onChangePage={text('onChangePage', undefined)}
      onChangeRowsPerPage={text('onChangeRowsPerPage', undefined)}
      page={text('page', undefined)}
      rowsPerPage={text('rowsPerPage', undefined)}
      rowsPerPageOptions={text('rowsPerPageOptions', [10, 25, 50, 100])}
      SelectProps={text('SelectProps', undefined)}
    >
      {text('children', 'Test')}
    </TablePagination>
  ),
  {
    info: {

    },
  })
