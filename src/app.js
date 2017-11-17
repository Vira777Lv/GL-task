import React from 'react';
import { render } from 'react-dom';
import App from './views/app/App';

function run() {
  const rootElement = document.getElementById('app');

  render(
    <App />,
    rootElement,
  );
}

if (module.hot) {
  module.hot.accept('./views/app/App.js', () => {
    setTimeout(run(), 30000);
  });
}

run();
