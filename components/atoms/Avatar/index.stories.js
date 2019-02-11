
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Avatar } from '../..';

storiesOf('atoms/Avatar', module)
  .add('default', () => (
    <Avatar
      alt={text('alt', undefined)}
      childrenClassName={text('childrenClassName', undefined)}
      sizes={text('sizes', undefined)}
      src={text('src', undefined)}
      srcSet={text('srcSet', undefined)}
    >
      {text('children', 'Test')}
    </Avatar>
  ),
  {
    info: {

    },
  });
