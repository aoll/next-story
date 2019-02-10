const reactDocs = require('react-docgen');
const Button = require('@material-ui/core/Button').default;

const componentInfo = reactDocs.parse(Button);

console.log(componentInfo);
//
// for (var variable in Button) {
//   if (Button.hasOwnProperty(variable)) {
//     console.log(variable);
//     for (var v in Button[variable]) {
//       if (Button[variable].hasOwnProperty(v)) {
//         console.log(v);
//       }
//     }
//   }
//   console.log('---------------------');
// }
// for (var variable in Button.Naked.propTypes) {
//   if (Button.Naked.propTypes.hasOwnProperty(variable)) {
//     console.log(variable);
//     console.log(Button.Naked.propTypes[variable]);
//     console.log(JSON.stringify(Button.Naked.propTypes[variable]));
//     // if (typeof Button.Naked.propTypes[variable] === 'function') {
//     //   // const ret = Button.Naked.propTypes[variable]();
//     //   console.log(ret);
//     // }
//   }
// }

// console.log((Button.Naked.propTypes.size));

// console.log('hello world');

//
// console.log(Button);
