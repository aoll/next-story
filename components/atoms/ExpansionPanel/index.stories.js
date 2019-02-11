
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ExpansionPanel } from '../..';

storiesOf('atoms/ExpansionPanel', module)
  .add('default', () => (
    <ExpansionPanel
      defaultExpanded={boolean('defaultExpanded', false)}
      disabled={boolean('disabled', false)}
      expanded={boolean('expanded', false)}
      square={boolean('square', false)}
    >
      {text('children', 'Test')}
    </ExpansionPanel>
  ),
  {
    info: {

    },
  });
