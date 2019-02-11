
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { MenuList } from '../..';

storiesOf('atoms/MenuList', module)
  .add('default', () => (
    <MenuList
      disableListWrap={boolean('disableListWrap', false)}
    >
      {text('children', 'Test')}
    </MenuList>
  ),
  {
    info: {

    },
  });
