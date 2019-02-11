
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { GridList } from '../..';

storiesOf('atoms/GridList', module)
  .add('default', () => (
    <GridList
      cellHeight={text('cellHeight', 180)}
      className={text('className', undefined)}
      cols={text('cols', 2)}
      spacing={text('spacing', 4)}
      style={text('style', undefined)}
    >
      {text('children', 'Test')}
    </GridList>
  ),
  {
    info: {

    },
  })
