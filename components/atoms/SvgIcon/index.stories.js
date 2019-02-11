
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { SvgIcon } from '../..';

storiesOf('atoms/SvgIcon', module)
  .add('default', () => (
    <SvgIcon
      color={select('color', ['inherit', 'primary', 'secondary', 'action', 'error', 'disabled'], 'inherit')}
      fontSize={select('fontSize', ['inherit', 'default', 'small', 'large'], 'default')}
      nativeColor={text('nativeColor', undefined)}
      shapeRendering={text('shapeRendering', undefined)}
      titleAccess={text('titleAccess', undefined)}
      viewBox={text('viewBox', '0 0 24 24')}
    >
      {text('children', 'Test')}
    </SvgIcon>
  ),
  {
    info: {

    },
  });
