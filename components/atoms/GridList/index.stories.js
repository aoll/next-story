
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { GridList } from '../..';

storiesOf('atoms/GridList', module)
  .add('default', () => (
    <GridList
      cols={text('cols', 2)}
      spacing={text('spacing', 4)}
    >
      {text('children', 'Test')}
    </GridList>
  ),
  {
    info: {

    },
  });
