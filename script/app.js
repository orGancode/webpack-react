import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Index from '../app/components/index';
import todoApp from '../app/reducers/reducers';

let store = createStore(todoApp);

let rootElement = document.getElementById('react')
render(
  <Provider store={store}>
    <Index />
  </Provider>,
  rootElement
)