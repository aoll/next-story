
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { BottomNavigationAction } from '../..';

storiesOf('atoms/BottomNavigationAction', module)
  .add('default', () => (
    <BottomNavigationAction
      className={text('className', undefined)}
      icon={text('icon', undefined)}
      label={text('label', undefined)}
      onChange={text('onChange', undefined)}
      onClick={text('onClick', undefined)}
      selected={boolean('selected', undefined)}
      showLabel={boolean('showLabel', undefined)}
      value={text('value', undefined)}
    >
      {text('children', 'Test')}
    </BottomNavigationAction>
  ),
  {
    info: {

    },
  })
