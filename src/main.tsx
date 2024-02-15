import ReactDOM from 'react-dom/client';
import init from './init';
import React from 'react';

const app = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  const vdom = await init();
  root.render(vdom);
};

app();
