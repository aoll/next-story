
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { TableCell } from '../..';

storiesOf('atoms/TableCell', module)
  .add('default', () => (
    <TableCell
      align={select('align', ['inherit','left','center','right','justify'] ,'inherit')}
      className={text('className', undefined)}
      numeric={text('numeric', undefined)}
      padding={select('padding', ['default','checkbox','dense','none'] ,undefined)}
      scope={text('scope', undefined)}
      sortDirection={select('sortDirection', ['asc','desc',false] ,undefined)}
      variant={select('variant', ['head','body','footer'] ,undefined)}
    >
      {text('children', 'Test')}
    </TableCell>
  ),
  {
    info: {

    },
  })
