// .storybook/config.js
import { configure, addDecorator, setAddon } from '@storybook/react';
import { muiTheme } from 'storybook-addon-material-ui';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes'; //to remove
import { withConsole } from '@storybook/addon-console';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import JSXAddon from 'storybook-addon-jsx';// to remove
import chaptersAddon from 'react-storybook-addon-chapters';
import { withInfo } from '@storybook/addon-info';

// import { checkA11y, configureA11y } from '@storybook/addon-a11y'; broke with the last version, have to wait

const req = require.context('../components', true, /stories\.js$/);

/**
 * WARNING:  It is important to declare this decorator as the first decorator, otherwise it won't work well.
 * [https description]
 * https://github.com/storybooks/storybook/tree/master/addons/info
 * @type {[type]}
 */
addDecorator(withInfo);

/**
 * [addDecorator description]
 * https://github.com/react-theming/storybook-addon-material-ui
 * allows access to the theme material-ui for each story
 * @param {func} muiTheme without argument makes the two basic themes of material
 * can take a theme board, ex: muiTheme([{}])
 */
addDecorator(muiTheme())

/**
 * [addDecorator description]
 * https://github.com/storybooks/storybook/tree/master/addons/knobs
 * @param {[type]} withKnobs [description]
 */
addDecorator(withKnobs);

/**
 * [addDecorator description]
 * https://github.com/storybooks/storybook/tree/master/addons/noteshttps://github.com/storybooks/storybook/tree/master/addons/notes
 * @param {[type]} withNotes [description]
 */
addDecorator(withNotes);

/**
 * [addDecorator description]
 * https://github.com/storybooks/storybook-addon-console
 * @param {[type]} storyFn [description]
 */
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

/**
 * [addDecorator description]
 * https://github.com/storybooks/storybook/tree/master/addons/backgrounds
 * @param {[type]} withBackgrounds [description]
 */
addDecorator(
  withBackgrounds([
    { name: 'empty', value: '#ffffff', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ])
);

/**
 * [setAddon description]
 * https://github.com/storybooks/addon-jsx
 * @param {[type]} JSXAddon [description]
 */
setAddon(JSXAddon);

/**
 * [setAddon description]
 * https://github.com/Checkfront/react-storybook-addon-chapters
 * @param {[type]} chaptersAddon [description]
 */
setAddon(chaptersAddon);

/**
 * [addDecorator description]
 * https://www.npmjs.com/package/@storybook/addon-a11y
 * allows access to the checkA11y for each story
 * @param {func} checkA11y html color validator
 * broke with the last version, have to wait
 */
// const whateverOptionsYouWant = {};
// configureA11y(whateverOptionsYouWant);
// addDecorator(checkA11y);

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module);
