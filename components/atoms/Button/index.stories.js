
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { Button } from '../..';

storiesOf('atoms/Button', module)
  .add('default', () => (
    <Button
      color={select('color', ['default', 'inherit', 'primary', 'secondary'], 'default')}
      disabled={boolean('disabled', false)}
      disableFocusRipple={boolean('disableFocusRipple', false)}
      disableRipple={boolean('disableRipple', false)}
      focusVisibleClassName={text('focusVisibleClassName', undefined)}
      fullWidth={boolean('fullWidth', false)}
      href={text('href', undefined)}
      mini={boolean('mini', false)}
      size={select('size', ['small', 'medium', 'large'], 'medium')}
      variant={select('variant', ['text', 'outlined', 'contained', 'fab', 'extendedFab', 'flat', 'raised'], 'text')}
    >
      {text('children', 'Test')}
    </Button>
  ),
  {
    info: {

    },
  });
