const reactDocs = require('react-docgen');
const fs = require('fs');

const template = require('./template/componentWithChildren.template');

const name = 'Button';
const path = `./${name}.js`;

// const data = `
//   const ${name} = () => <div></div>;
//   ${fs.readFileSync(path).toString()
//     .replace(`function ${name}`, `function ${name}2`)
//     .replace('var _propTypes = _interopRequireDefault(require("prop-types"));', "import {PropTypes as _propTypes} from 'prop-types';")
//     .replace('(0, _utils.chainPropTypes)(', '')
//     .replace('), function (props) {', ') (function (props) {')
//     .replace('_utils.componentPropType', '_propTypes.default.element')
// }`;


console.log(template);
// console.log('Synchronous read: ' + data);

const pathToWrite = `./output/${name}.js`
// write to a new file named 2pac.txt
fs.writeFile(pathToWrite, template, (err) => {
  // throws an error, you could also catch it here
  if (err) throw err;

  // success case, the file was saved
  console.log('Lyric saved!');
});

// console.log(reactDocs.parse(data));
