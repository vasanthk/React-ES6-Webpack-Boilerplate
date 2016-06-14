import React from 'react';
import {render} from 'react-dom';
import {renderToString} from 'react-dom/server';
import App from './App';

if (typeof document !== 'undefined') {
  render(
    <App />,
    document.getElementById('root')
  );
}

module.exports = function(path, locals, render) {
  setTimeout(function() {
    render(locals.template({ html: renderToString(<App/>)}));
  }, 10);
};
