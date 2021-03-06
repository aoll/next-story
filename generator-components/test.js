const reactDocs = require('react-docgen');
const fs = require('fs');
const get = require('lodash/get');
const materialCore = require('@material-ui/core');

// to handle : _react.default.createElement
// _transition
// PropTypes.,
// new
// _Paper
// Popper (component)
//
//
// NUMBER

const componentTemplate = require('./template/componentWithChildren.template').default;
const storieTemplate = require('./template/storieWithChildren.template');
// const componentTemplateWithoutChildren = require('./template/componentWithoutChildren.template').exports;
// const storieTemplateWithout = require('./template/storieWithoutChildren.template');

const libSrc = '../node_modules/@material-ui/core';
const THEME_PROVIDER = 'MuiThemeProvider';
const materialCoreKey = Object.keys(materialCore)
  .filter(key => key[0] !== key[0].toLowerCase() && key !== THEME_PROVIDER && fs.existsSync(`${libSrc}/${key}/${key}.js`))
  .map(key => key);

// const materialCoreKey = ['Checkbox'];
console.log(materialCoreKey);
// seven to exclude
// return

for (let iKey = 0; iKey < materialCoreKey.length; iKey += 1) {
  const name = materialCoreKey[iKey];

  const path = `${libSrc}/${name}/${name}.js`;

  console.log(path);
  const data = `
  const ${name} = () => <div></div>;
  ${fs.readFileSync(path).toString()
    .replace(`function ${name}`, `function ${name}2`)
    .replace('var _propTypes = _interopRequireDefault(require("prop-types"));', "import {PropTypes as _propTypes} from 'prop-types';")
    .replace('(0, _utils.chainPropTypes)(', '')
    .replace('), function (props) {', ') (function (props) {')
    .replace(', function (props) {', ' (function (props) {')
    .replace('_utils.componentPropType', '_propTypes.default.element')
}`;

  const parsed = reactDocs.parse(data);

  console.log(parsed);
  const { props } = parsed;
  const listPropTypes = [];
  const listDefaultProps = [];
  const listProps = [];


  const transpileForKnob = {
    enum: 'select',
    oneOf: 'select',
    bool: 'boolean',
    string: 'text',
    node: 'text',
    element: 'text',
    undefined: 'text',
  };

  const keys = Object.keys(props || {}).map(key => key);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const prop = props[key];

    const typeName = get(prop, 'type.name');
    if ((typeName === 'string'
      || typeName === 'bool'
      || typeName === 'number'
      || typeName === 'enum'
      // || typeName === 'union'
      || prop.required)
      && (key !== 'classes'
        && key !== 'className'
        && key !== 'type'
        && key !== 'value'
      )
    ) {
      const entry = `/**\n   * ${get(prop, 'description', '').replace(/\n/g, '\n   * ')}\n   */
  ${key}: PropTypes.${get(prop, 'type.name', '') === 'enum' ? `oneOf([${get(prop, 'type.value', []).map(e => e.value)}])` : get(prop, 'type.name', '')}${prop.required ? '.isRequired' : ''},`;

      if (key !== 'classes') {
        listPropTypes.push(entry);
      }

      const defaultValue = get(prop, 'defaultValue.value');

      if (!prop.required && key !== 'component') {
        // if (defaultValue && typeof defaultValue === 'string' && defaultValue[0] !== '_' && !defaultValue.match('_react') && !defaultValue.match('_transition')) {
        if (defaultValue) {
          listDefaultProps.push(`${key}: ${get(prop, 'defaultValue.value')}`);
        }
        // else if (defaultValue && (typeof defaultValue === 'boolean' || typeof defaultValue === 'number')) {
        //   listDefaultProps.push(`${key}: ${defaultValue}`);
        // }
      }

      if (key !== 'classes' && key !== 'children' && key !== 'component') {
        if (typeName === 'enum') {
          listProps.push(`${key}={${transpileForKnob[typeName]}('${key}', [${get(prop, 'type.value', []).map(e => e.value)}], ${defaultValue})}`);
        } else {
          listProps.push(`${key}={${(transpileForKnob[get(prop, 'type.name', '')] || 'text')}('${key}', ${get(prop, 'defaultValue.value', (typeName === 'bool' ? false : undefined))})}`);
        }
      }
    }
  }

  console.log(keys);


  const componentTemplateHydrated = componentTemplate
    .replace(/{name}/g, name)
    .replace('{propTypes}', listPropTypes.join('\n  '))
    .replace('{defaultProps}', listDefaultProps.join(',\n  '))
    .replace(/ ,/g, ',')
    .replace(/','/g, "', '");

  const storieTemplateHydrated = storieTemplate
    .replace(/{name}/g, name)
    .replace('{props}', listProps.join('\n      '))
    .replace(/ ,/g, ',')
    .replace(/','/g, "', '");


  // console.log(storieTemplateHydrated);
  // console.log(componentTemplateHydrated);
  // console.log(listProps);
  // console.log(template);


  const dirPath = `./output/${name}`;
  try {
    fs.mkdirSync(dirPath);
  } catch (e) {
    console.log('');
  }

  const pathToWrite = `./output/${name}/index.js`;
  // write to a new file named 2pac.txt
  fs.writeFileSync(pathToWrite, componentTemplateHydrated, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log(`Component ${name} saved!`);
  });
  const pathToWriteStorie = `./output/${name}/index.stories.js`;
  // write to a new file named 2pac.txt
  fs.writeFileSync(pathToWriteStorie, storieTemplateHydrated, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log(`Storie ${name} saved!`);
  });
}
