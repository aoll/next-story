
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { GridListTile } from '../..';

storiesOf('atoms/GridListTile', module)
  .add('default', () => (
    <GridListTile
      cols={text('cols', 1)}
      rows={text('rows', 1)}
    >
      {text('children', 'Test')}
    </GridListTile>
  ),
  {
    info: {

    },
  });
