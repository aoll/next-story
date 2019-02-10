import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import { Button } from '../..';

storiesOf('atoms/Button', module)
  .addWithChapters(
    'Story With Chapters',
    {
      subtitle: 'Optional story subtitle',
      info: 'Optional story info',
      chapters: [
        // List of chapters. Refer to Configuration Format section.
        {
          title: 'Optional chapter title',
          subtitle: 'Optional chapter subtitle',
          info: 'Optional chapter info',
          sections: [
            // List of sections.
            {
              title: 'Optional section title',
              subtitle: 'Optional section subtitle',
              info: 'Optional section info',
              sectionFn: () => (
                <Button
                  color={select('color', ['default', 'primary', 'secondary'], 'default')}
                  disabled={boolean('disabled', false)}
                  onClick={action("it's a log")}
                  variant={select('variant', ['text', 'outlined', 'contained'], 'text')}
                >
                  {text('children', 'Test')}
                </Button>
              ),
              options: {
                showSource: true,
                allowSourceToggling: true,
                showPropTables: true,
                allowPropTablesToggling: true,
              },
            },
          ],
        },
      ],
    },
  )
  .addWithJSX('default', () => (
    <Button
      color={select('color', ['default', 'primary', 'secondary'], 'default')}
      disabled={boolean('disabled', false)}
      onClick={action("it's a log")}
      variant={select('variant', ['text', 'outlined', 'contained'], 'text')}
    >
      {text('children', 'Test')}
    </Button>
  ), {
    notes: { markdown: 'A simple note that can come from a string or a file import' },
  })
  .add('outlined primary', () => (
    <Button variant="outlined" color="primary" onClick={action('clicked')}>
      Outline Primary
    </Button>
  ),
  {
    info: {

    },
  })
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
