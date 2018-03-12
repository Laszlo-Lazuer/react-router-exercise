import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <div>
    <Route path='/' component={App} />
    <Route path='/home' render={() => <h1>Hello</h1>} />
  </div>
  </BrowserRouter>,
  document.getElementById('root'));

if (module.hot) {
  module.hot.accept()
}
