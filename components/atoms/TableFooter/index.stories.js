
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { TableFooter } from '../..';

storiesOf('atoms/TableFooter', module)
  .add('default', () => (
    <TableFooter
      className={text('className', undefined)}
    >
      {text('children', 'Test')}
    </TableFooter>
  ),
  {
    info: {

    },
  })
