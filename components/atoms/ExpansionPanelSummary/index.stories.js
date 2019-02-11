
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ExpansionPanelSummary } from '../..';

storiesOf('atoms/ExpansionPanelSummary', module)
  .add('default', () => (
    <ExpansionPanelSummary
      disabled={boolean('disabled', false)}
      expanded={boolean('expanded', false)}
    >
      {text('children', 'Test')}
    </ExpansionPanelSummary>
  ),
  {
    info: {

    },
  });
