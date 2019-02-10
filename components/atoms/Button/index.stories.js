import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { text, boolean, select } from '@storybook/addon-knobs';
import Button from '.';

storiesOf('atoms/Button', module)
  // .addWithJSX('default', () => (
  //   <Button
  //     color={select('color', ['default', 'primary', 'secondary'], 'default')}
  //     disabled={boolean('disabled', false)}
  //     onClick={action("it's a log")}
  //     variant={select('variant', ['text', 'outlined', 'contained'], 'text')}
  //   >
  //     {text('children', 'Test')}
  //   </Button>
  // ), {
  //   notes: { markdown: 'A simple note that can come from a string or a file import' },
  // })
  .add('outlined primary', () => (
    <Button variant="outlined" color="primary" onClick={action('clicked')}>
      Outline Primary
    </Button>
  ))
  .add('contained secondary', () => (
    <Button variant="contained" color="secondary" onClick={action('clicked')}>
      Contained Secondary
    </Button>
  ))
  .add('disabled button', () => (
    <Button variant="contained" color="primary" onClick={action('clicked')} disabled>
      Disabled Button
    </Button>
  ));
