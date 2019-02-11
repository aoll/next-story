
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Chip } from '../..';

storiesOf('atoms/Chip', module)
  .add('default', () => (
    <Chip
      avatar={text('avatar', undefined)}
      className={text('className', undefined)}
      clickable={boolean('clickable', undefined)}
      color={select('color', ['default','primary','secondary'] ,'default')}
      deleteIcon={text('deleteIcon', undefined)}
      icon={text('icon', undefined)}
      label={text('label', undefined)}
      onClick={text('onClick', undefined)}
      onDelete={text('onDelete', undefined)}
      onKeyDown={text('onKeyDown', undefined)}
      onKeyUp={text('onKeyUp', undefined)}
      tabIndex={text('tabIndex', undefined)}
      variant={select('variant', ['default','outlined'] ,'default')}
    >
      {text('children', 'Test')}
    </Chip>
  ),
  {
    info: {

    },
  })
