
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { GridListTileBar } from '../..';

storiesOf('atoms/GridListTileBar', module)
  .add('default', () => (
    <GridListTileBar
      actionIcon={text('actionIcon', undefined)}
      actionPosition={select('actionPosition', ['left','right'] ,'right')}
      className={text('className', undefined)}
      subtitle={text('subtitle', undefined)}
      title={text('title', undefined)}
      titlePosition={select('titlePosition', ['top','bottom'] ,'bottom')}
    >
      {text('children', 'Test')}
    </GridListTileBar>
  ),
  {
    info: {

    },
  })
