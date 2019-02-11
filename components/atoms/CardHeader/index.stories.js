
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { CardHeader } from '../..';

storiesOf('atoms/CardHeader', module)
  .add('default', () => (
    <CardHeader
      action={text('action', undefined)}
      avatar={text('avatar', undefined)}
      className={text('className', undefined)}
      disableTypography={boolean('disableTypography', false)}
      subheader={text('subheader', undefined)}
      subheaderTypographyProps={text('subheaderTypographyProps', undefined)}
      title={text('title', undefined)}
      titleTypographyProps={text('titleTypographyProps', undefined)}
    >
      {text('children', 'Test')}
    </CardHeader>
  ),
  {
    info: {

    },
  })
