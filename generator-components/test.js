const reactDocs = require('react-docgen');
const fs = require('fs');
const _get = require('lodash/get')

const componentTemplate = require('./template/componentWithChildren.template').default;
const storieTemplate = require('./template/storieWithChildren.template');


// console.log(storieTemplate);

const name = 'Button';
const path = `./${name}.js`;

const data = `
  const ${name} = () => <div></div>;
  ${fs.readFileSync(path).toString()
    .replace(`function ${name}`, `function ${name}2`)
    .replace('var _propTypes = _interopRequireDefault(require("prop-types"));', "import {PropTypes as _propTypes} from 'prop-types';")
    .replace('(0, _utils.chainPropTypes)(', '')
    .replace('), function (props) {', ') (function (props) {')
    .replace('_utils.componentPropType', '_propTypes.default.element')
}`;

const parsed = reactDocs.parse(data);

// console.log(parsed);

const { props } = parsed;
const listPropTypes = [];
const listDefaultProps = [];
const listProps = [];

// console.log(props);
// const key = 'disabled';

// console.log(props.color);

const transpileForKnob = {
  enum: 'select',
  oneOf: 'select',
  bool: 'boolean',
  string: 'text',
  node: 'text',
  element: 'text',
};

const keys = Object.keys(props).map(key => key);
for (let i = 0; i < keys.length; i += 1) {
  const key = keys[i];
  const prop = props[key];
  const entry = `
  /*
  * ${prop.description.replace(/\n/g, '\n  * ')}
  */
  ${key}: PropTypes.${prop.type.name === 'enum' ? `oneOf([${prop.type.value.map(e => e.value)}])` : prop.type.name}${prop.required ? '.isRequired' : ''},
  `;

  if (key !== 'classes') {
    listPropTypes.push(entry);
  }

  if (!prop.required) {
    listDefaultProps.push(`${key}: ${_get(prop, 'defaultValue.value')}`);
  }

  if (key !== 'classes' && key !== 'children') {
    if (prop.type.name === 'enum') {
      listProps.push(`${key}={${transpileForKnob[prop.type.name]}('${key}', [${prop.type.value.map(e => e.value)}] ,${_get(prop, 'defaultValue.value')})}`);
    } else {
      listProps.push(`${key}={${transpileForKnob[prop.type.name]}('${key}', ${_get(prop, 'defaultValue.value')})}`);
    }
  }
}

// console.log(listDefaultProps);
// console.log(listPropTypes);

const componentTemplateHydrated = componentTemplate
  .replace(/{name}/g, name)
  .replace('{propTypes}', listPropTypes.join('\n  '))
  .replace('{defaultProps}', listDefaultProps.join('\n  '));

const storieTemplateHydrated = storieTemplate
  .replace(/{name}/g, name)
  .replace('{props}', listProps.join('\n      '));

console.log(storieTemplateHydrated);
// console.log(componentTemplateHydrated);
// console.log(listProps);
// console.log(template);

// const pathToWrite = `./output/${name}/index.js`
// // write to a new file named 2pac.txt
// fs.writeFile(pathToWrite, componentTemplateHydrated, (err) => {
//   // throws an error, you could also catch it here
//   if (err) throw err;
//
//   // success case, the file was saved
//   console.log('Component saved!');
// });
