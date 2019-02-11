
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Tabs } from '../..';

storiesOf('atoms/Tabs', module)
  .add('default', () => (
    <Tabs
      action={text('action', undefined)}
      centered={boolean('centered', false)}
      className={text('className', undefined)}
      fullWidth={text('fullWidth', undefined)}
      indicatorColor={select('indicatorColor', ['secondary','primary'] ,'secondary')}
      onChange={text('onChange', undefined)}
      scrollable={text('scrollable', undefined)}
      scrollButtons={select('scrollButtons', ['auto','on','off'] ,'auto')}
      TabIndicatorProps={text('TabIndicatorProps', undefined)}
      textColor={select('textColor', ['secondary','primary','inherit'] ,'inherit')}
      theme={text('theme', undefined)}
      value={text('value', undefined)}
      variant={select('variant', ['standard','scrollable','fullWidth'] ,'standard')}
    >
      {text('children', 'Test')}
    </Tabs>
  ),
  {
    info: {

    },
  })
