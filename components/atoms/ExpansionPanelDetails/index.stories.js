
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select, number } from '@storybook/addon-knobs';
import { ExpansionPanelDetails } from '../..';

storiesOf('atoms/ExpansionPanelDetails', module)
  .add('default', () => (
    <ExpansionPanelDetails
      
    >
      {text('children', 'Test')}
    </ExpansionPanelDetails>
  ),
  {
    info: {

    },
  });
