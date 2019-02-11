
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { GridListTileBar } from '../..';

storiesOf('atoms/GridListTileBar', module)
  .add('default', () => (
    <GridListTileBar
      actionPosition={select('actionPosition', ['left', 'right'], 'right')}
      titlePosition={select('titlePosition', ['top', 'bottom'], 'bottom')}
    >
      {text('children', 'Test')}
    </GridListTileBar>
  ),
  {
    info: {

    },
  });
