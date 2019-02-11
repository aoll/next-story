
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Icon } from '../..';

storiesOf('atoms/Icon', module)
  .add('default', () => (
    <Icon
      className={text('className', undefined)}
      color={select('color', ['inherit','primary','secondary','action','error','disabled'] ,'inherit')}
      fontSize={select('fontSize', ['inherit','default','small','large'] ,'default')}
    >
      {text('children', 'Test')}
    </Icon>
  ),
  {
    info: {

    },
  })
