
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ListItem } from '../..';

storiesOf('atoms/ListItem', module)
  .add('default', () => (
    <ListItem
      alignItems={select('alignItems', ['flex-start','center'] ,'center')}
      button={boolean('button', false)}
      className={text('className', undefined)}
      ContainerComponent={text('ContainerComponent', 'li')}
      ContainerProps={text('ContainerProps', undefined)}
      dense={boolean('dense', false)}
      disabled={boolean('disabled', false)}
      disableGutters={boolean('disableGutters', false)}
      divider={boolean('divider', false)}
      focusVisibleClassName={text('focusVisibleClassName', undefined)}
      selected={boolean('selected', false)}
    >
      {text('children', 'Test')}
    </ListItem>
  ),
  {
    info: {

    },
  })
