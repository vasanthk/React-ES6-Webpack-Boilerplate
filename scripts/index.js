import React from 'react';
import {render} from 'react-dom';
import {renderToString} from 'react-dom/server';
import App from './App';

if (typeof document !== 'undefined') {
  console.log('xxxx')
  render(
    <App />,
    document.getElementById('root')
  );
}

module.exports = function(path, props, render) {
  render('<!doctype html>' + renderToString(<App/>));
};
