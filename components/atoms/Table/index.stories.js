
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Table } from '../..';

storiesOf('atoms/Table', module)
  .add('default', () => (
    <Table
      padding={select('padding', ['default', 'checkbox', 'dense', 'none'], 'default')}
    >
      {text('children', 'Test')}
    </Table>
  ),
  {
    info: {

    },
  });
