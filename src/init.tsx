import React from 'react';
import { Provider } from 'react-redux';
import App from './features/App';
import './index.css';
import { setupStore } from './store/store';

const store = setupStore();
export default async () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
