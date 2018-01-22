// import _ from 'lodash';

// function component() {
//   const element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

// document.body.appendChild(component());
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

window.React = React;
render(<App />, document.getElementById('react-container'));
