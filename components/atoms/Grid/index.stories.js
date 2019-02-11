
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Grid } from '../..';

storiesOf('atoms/Grid', module)
  .add('default', () => (
    <Grid
      alignContent={select('alignContent', ['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'], 'stretch')}
      alignItems={select('alignItems', ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'], 'stretch')}
      container={boolean('container', false)}
      direction={select('direction', ['row', 'row-reverse', 'column', 'column-reverse'], 'row')}
      item={boolean('item', false)}
      justify={select('justify', ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'], 'flex-start')}
      lg={select('lg', [false,'auto',true,1,2,3,4,5,6,7,8,9,10,11,12], false)}
      md={select('md', [false,'auto',true,1,2,3,4,5,6,7,8,9,10,11,12], false)}
      sm={select('sm', [false,'auto',true,1,2,3,4,5,6,7,8,9,10,11,12], false)}
      spacing={select('spacing', [0,8,16,24,32,40], 0)}
      wrap={select('wrap', ['nowrap', 'wrap', 'wrap-reverse'], 'wrap')}
      xl={select('xl', [false,'auto',true,1,2,3,4,5,6,7,8,9,10,11,12], false)}
      xs={select('xs', [false,'auto',true,1,2,3,4,5,6,7,8,9,10,11,12], false)}
      zeroMinWidth={boolean('zeroMinWidth', false)}
    >
      {text('children', 'Test')}
    </Grid>
  ),
  {
    info: {

    },
  });
